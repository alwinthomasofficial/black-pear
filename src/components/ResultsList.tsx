import React, { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemButton from '@mui/material/ListItemButton';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';

interface ResultsListProps {
  resultsData: any[];
}

const ResultsList = ({ resultsData }: ResultsListProps): JSX.Element => {
  const [checked, setChecked] = useState([0]);

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const patientDetails = (dob: string, nhsNumber: string) => {
    return (
      <>
        <Typography
          display="block"
          component="span"
          sx={{ fontWeight: 'bold' }}
        >
          {`Date of Birth: ${dob}`}
        </Typography>
        <Typography
          display="block"
          component="span"
          sx={{ fontWeight: 'bold' }}
        >
          {`NHS Number: ${nhsNumber}`}
        </Typography>
      </>
    );
  };

  return (
    <>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {resultsData.map((value) => {
          const labelId = `checkbox-list-label-${value}`;
          return (
            <ListItem key={value.id}>
              <ListItemButton
                role={undefined}
                onClick={handleToggle(value)}
                dense
              >
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={checked.indexOf(value) !== -1}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ 'aria-labelledby': labelId }}
                  />
                </ListItemIcon>

                <ListItemText
                  primary={
                    <Typography sx={{ fontWeight: 'bold' }}>
                      {value.name}
                    </Typography>
                  }
                  secondary={patientDetails(value.dateOfBirth, value.nhsNumber)}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </>
  );
};

export default ResultsList;
