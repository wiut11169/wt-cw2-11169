const { fetch, fetchAll } = require("../../lib/postgres");

const ALL_REMINDER = `
    SELECT 
        *
    FROM
        reminder
`;
const ADD_REMINDER = `
    INSERT INTO 
        reminder(reminder_name , reminder_time)
    VALUES($1 , $2)
    RETURNING *
`;
const DELETE_REMINDER = `
DELETE FROM reminder
WHERE reminder_id = $1
`;

const UPDATE_REMINDER = `
    UPDATE 
        reminder SET 
        reminder_name = $1 , 
        reminder_time = $2 
    WHERE 
        reminder_id = $3
`;
const FIND_BY_ID = `
SELECT * FROM reminder WHERE reminder_id IN ($1)

`;
const reminder = () => fetchAll(ALL_REMINDER);
const addreminder = (remindername , remindertime) => fetch(ADD_REMINDER, remindername , remindertime);
const deleteReminder = (id) => fetch(DELETE_REMINDER, id);
const updateReminder = (remindername, remindertime,id) => fetch(UPDATE_REMINDER, remindername,remindertime, id);
const findid = (id) => fetch(FIND_BY_ID, id);

module.exports = {
    reminder,
    addreminder,
    deleteReminder,
    updateReminder,
    findid,
};
