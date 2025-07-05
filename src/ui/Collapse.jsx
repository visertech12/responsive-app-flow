
import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';

const Collapse = ({ title, id, expanded, handleChange, children }) => {
  return (
    <Accordion expanded={expanded === id} onChange={handleChange(id)}>
      <AccordionSummary>
        <span>{title}</span>
      </AccordionSummary>
      <AccordionDetails>
        {children}
      </AccordionDetails>
    </Accordion>
  );
};

export default Collapse;
