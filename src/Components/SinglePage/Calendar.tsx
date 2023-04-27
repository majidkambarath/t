import React, { useState } from "react";
import { Card, Calendar } from "react-rainbow-components";

const initialState = { range: [new Date(), new Date(2019, 0, 15)] };

const ExampleCalendar: React.FC = () => {
  const [state, setState] = useState(initialState);
  // const [bookedDates, setBookedDates] = useState<Date[]>([
  //   new Date(2023, 3, 1),
  //   new Date(2023, 3, 3),
  //   new Date(2023, 3, 6),
  // ]);
  return (
    <div>
      <div className="rainbow-align-content_center rainbow-p-vertical_xx-large rainbow-p-horizontal_medium">
        <Card
     
          className="rainbow-p-around_large md:w-[400px] w-[380px]  h-[400px]"
        >
          <Calendar
            id="calendar-7"
            selectionType="range"
            value={state.range}
            onChange={(value:any) => setState({ range: value })}
            // disabledDays={bookedDates}
          />
        </Card>
      </div>
    </div>
  );
};

export default ExampleCalendar;
