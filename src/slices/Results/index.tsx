'use client';
import React, { FC, useState } from 'react';
import { Content } from '@prismicio/client';
import { PrismicRichText, SliceComponentProps } from '@prismicio/react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Tab,
  Tabs,
  Typography,
} from '@mui/material';
import { ExpandMore } from '@mui/icons-material';

/**
 * Props for `Results`.
 */
export type ResultsProps = SliceComponentProps<Content.ResultsSlice>;

/**
 * Component for "Results" Slices.
 */

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel({ children, value, index, ...other }: TabPanelProps) {
  return (
    <div role="tabpanel" hidden={value !== index} {...other}>
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

const Results: FC<ResultsProps> = ({ slice }) => {
  const [activeTabs, setActiveTabs] = useState<{ [key: string]: number }>({});

  console.log(slice);

  const partnerId = slice.primary.name_partner || 'wp';

  const handleChange = (newValue: number) => {
    setActiveTabs((prev) => ({
      ...prev,
      [partnerId]: newValue,
    }));
  };

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel-content"
            id={`panel-header-${partnerId}`}
          >
            <Typography
              sx={{ fontSize: { xs: '14px', sm: '17px', md: '20px' } }}
            >
              {partnerId}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box sx={{ width: '100%' }}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs
                  variant="scrollable"
                  scrollButtons="auto"
                  value={activeTabs[partnerId] ?? 0} // Обрабатываем undefined
                  onChange={(_, newValue) => handleChange(newValue)}
                  aria-label="partner-tabs"
                >
                  {slice.primary.result_partner.map((task) => (
                    <Tab
                      key={`tabs-${partnerId}-${task.task_name}`}
                      label={task.task_name}
                    />
                  ))}
                </Tabs>
              </Box>
              {slice.primary.result_partner.map((task, i) => (
                <CustomTabPanel
                  key={`panel-${partnerId}-${task.task_name}`}
                  value={activeTabs[partnerId] ?? 0} // Обрабатываем undefined
                  index={i}
                >
                  {/*<p className={styles.tab__text}>{task.task_result}</p>*/}
                </CustomTabPanel>
              ))}
            </Box>
          </AccordionDetails>
        </Accordion>
      </div>
    </section>
  );
};

export default Results;
