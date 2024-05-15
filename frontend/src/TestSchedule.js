import React from "react";
import Schedule from "Schedule";
import { addDays, subDays } from "date-fns";

const TestScedule = () => {
  return (
    <div className="">
      <Schedule
        events={[
          { date: subDays(new Date(), 6), title: "Post video" },
          { date: subDays(new Date(), 1), title: "Edit video" },
          { date: addDays(new Date(), 3), title: "Code" },
        ]}
      />
    </div>
  );
};

export default TestScedule;
