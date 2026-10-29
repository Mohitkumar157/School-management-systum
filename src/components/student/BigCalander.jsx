"use client";

import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
import { calendarEvents } from "@/lib/data";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useState } from "react";

const localizer = momentLocalizer(moment);

const BigCalendar = () => {
    const [view, setView] = useState(Views.WORK_WEEK);

    const handleOnChangeView = (selectedView) => {
        setView(selectedView);
    };

    return (
        <Calendar
            localizer={localizer}
            events={calendarEvents}
            startAccessor="start"
            endAccessor="end"

            views={[Views.WORK_WEEK, Views.DAY]}
            view={view}
            onView={handleOnChangeView}

            // Calendar initially event wali date par open hoga
            defaultDate={calendarEvents[0]?.start}

            // Time range
            min={new Date(2025, 0, 1, 8, 0, 0)}
            max={new Date(2025, 0, 1, 17, 0, 0)}
            
            style={{ height: "98%" }}
        />
    );
};

export default BigCalendar;