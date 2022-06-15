// This is just for the test of rendering schedules all the time

export const TESTDATA_DAY = [
  2, 2, 5, 6, 5, 4, 0, 1, 3, 2, 2, 2, 2, 5, 3, 1, 2, 3, 2, 0, 3, 2, 3, 5, 3, 2,
  1, 2, 4, 1, 2, 1,
];
export const TESTDATA_SCHEDULE = [
  [
    {
      timeFrom: "1:30 pm",
      timeTo: "2:40 pm",
      status: "available",
    },
    {
      timeFrom: "2:30 pm",
      timeTo: "6:40 pm",
      status: "Pending",
      type: "person",
    },
    {
      timeFrom: "1:30 pm",
      timeTo: "2:40 pm",
      status: "rescheduled",
      type: "phone",
    },
  ],
  [
    {
      timeFrom: "1:30 pm",
      timeTo: "2:40 pm",
      status: "rescheduled",
      type: "phone",
    },
    {
      timeFrom: "2:30 pm",
      timeTo: "6:40 pm",
      status: "Pending",
      type: "person",
    },
    {
      timeFrom: "1:30 pm",
      timeTo: "2:40 pm",
      status: "confirmed",
      type: "online",
    },
  ],
  [
    {
      timeFrom: "1:30 pm",
      timeTo: "2:40 pm",
      status: "available",
    },
    {
      timeFrom: "2:30 pm",
      timeTo: "6:40 pm",
      status: "confirmed",
      type: "online",
    },
    {
      timeFrom: "1:30 pm",
      timeTo: "2:40 pm",
      status: "rescheduled",
      type: "person",
    },
  ],
  [
    {
      timeFrom: "1:30 pm",
      timeTo: "2:40 pm",
      status: "available",
    },
    {
      timeFrom: "2:30 pm",
      timeTo: "6:40 pm",
      status: "available",
    },
    {
      timeFrom: "1:30 pm",
      timeTo: "2:40 pm",
      status: "confirmed",
      type: "online",
    },
  ],
  [
    {
      timeFrom: "1:30 pm",
      timeTo: "2:40 pm",
      status: "available",
    },
    {
      timeFrom: "2:30 pm",
      timeTo: "6:40 pm",
      status: "pending",
      type: "person",
    },
    {
      timeFrom: "1:30 pm",
      timeTo: "2:40 pm",
      status: "available",
    },
  ],
  [
    {
      timeFrom: "1:30 pm",
      timeTo: "2:40 pm",
      status: "reshceduled",
      type: "online",
    },
    {
      timeFrom: "2:30 pm",
      timeTo: "6:40 pm",
      status: "Pending",
      type: "phone",
    },
    {
      timeFrom: "1:30 pm",
      timeTo: "2:40 pm",
      status: "available",
    },
  ],
  [
    {
      timeFrom: "1:30 pm",
      timeTo: "2:40 pm",
      status: "reshceduled",
      type: "online",
    },
    {
      timeFrom: "2:30 pm",
      timeTo: "6:40 pm",
      status: "Pending",
      type: "phone",
    },
    {
      timeFrom: "1:30 pm",
      timeTo: "2:40 pm",
      status: "available",
    },
  ],
];
