import React from 'react';
import BigCalendar from 'react-big-calendar-like-google';
import events from '../events.js';
import "react-big-calendar-like-google/lib/css/react-big-calendar.css";
import moment from 'moment'




moment.locale("en");
BigCalendar.momentLocalizer(moment);

function generateobj(sched){
    const defaultYear = 2021
    const defaultDay = 19
    const defaultMonth = 8
    
    
    var buff = sched.split(" ").splice(-2);
    var days = buff[0].split("-")

    var times = buff[1].split("-")
    var time_start = times[0].split(":")
    var tsh = time_start[0]
    var tsm = time_start[1]

    var time_end = times[1].split(":")
    var teh = time_end[0]
    var tem = time_end[1]
    
    
    var result = []

    

    for (let index = 0; index < days.length; index++)
    {
        const obj = {
        title: sched.split(" ").slice(0,-2).join(" "),
        start: new Date(defaultYear, defaultMonth, currentDay, tsh, tsm ),
        end: new Date(defaultYear, defaultMonth, currentDay, teh, tem ) 
        }

        var currentDay = defaultDay
        switch(days[index]){
            case 'M':
                currentDay = currentDay + 1;
                break;
            case 'T':
                currentDay = currentDay + 2;
                break;
            case 'W':
                currentDay = currentDay + 3;
                break;
            case 'Th':
                currentDay = currentDay + 4;
                break;
            case 'F':
                currentDay = currentDay + 5;
                break;
            case 'S':
                currentDay = currentDay + 6;
                break;
            default:
                currentDay = defaultDay      
        }
        
        console.log("days here!")
        console.log(currentDay)
        obj.start = new Date(defaultYear, defaultMonth, currentDay, tsh, tsm )
        obj.end = new Date(defaultYear, defaultMonth, currentDay, teh, tem ) 
        result.push(obj)
    }

    console.log("generating..")
 
    return result
}

export default function Calendar(props){
    
    const allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k]);

    console.log("here i am at the calendar")
    
    var unparsed = props.schedules[0]
    unparsed = unparsed.replace(/\'/g, "\"")
    var parsed = JSON.parse(unparsed)
    console.log(parsed)
    var myevents = parsed.flatMap( n => {

        var res = generateobj(n)
        return(
            [res[0] , res[1]]
        )
    }
        
    )
    console.log(myevents)

    return(
        <BigCalendar
          toolbar={false}
          events={myevents}
          date={new Date(2021, 8, 20)}
          step={50}
          views={allViews}
          view={"week"}
          onView={() => {}}
          
        />
    );
}