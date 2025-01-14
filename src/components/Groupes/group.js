import React from "react";
import './group.scss'



function Group() {
  const students = [
    {
      name: "אבי כהן",
      afraidOfWater: true,
      adaptation: false,
      chestHands: true,
      chestLegs: true,
      handsAndBreathing: false,
      combination: true,
      fullStyle: false,
      lessonsCount: 12,
      phoneNumber: 123456789,
      attendance: true,
      notes: "מתקדם במהירות",
    },
    {
      name: "דנה לוי",
      afraidOfWater: false,
      adaptation: true,
      chestHands: false,
      chestLegs: true,
      handsAndBreathing: true,
      combination: false,
      fullStyle: true,
      lessonsCount: 8,
      phoneNumber: 987654321,
      attendance: false,
      notes: "נדרשת עבודה על נשימות",
    },
  ];


  return (
    <>
      <div className="filterBy">

      </div>
      <div className="options">
        <select>
          <option>10:00</option>
          <option>11:00</option>
          <option>12:00</option>
          <option>13:00</option>
          <option>14:00</option>
        </select>
        <select>
          <option>ראשון</option>
          <option>שני</option>
          <option>שלישי</option>
          <option>רביעי</option>
          <option>חמישי</option>
        </select>
      </div>
      <div className="all-groups">
        <div className="coaches">
          <p>הדס יצחקי | מתחילות</p>
          <p>שיר ארגמן | מתחילות</p>
          <p>רות אשר | שיפור</p>
          <p>טל רוב | מתקדמות</p>
        </div>

        <button id="add-group">+</button>
      </div>
      <div className="group-detailes">
        <p>ss</p>
        <p>ss</p>
        <p>ss</p>
        <p>ss</p>
      </div>
      <table className="tb-groups">
        <thead>
          <tr className="headers-groups">
            <th>שם תלמיד</th>
            <th>פחד ממים</th>
            <th>הסתגלות</th>
            <th>חזה רגליים</th>
            <th>חזה ידיים</th>
            <th>ידיים + נשימה</th>
            <th>שילוב</th>
            <th>סגנון מלא</th>
            <th>כמה שיעורים עשתה</th>
            <th>מספר טלפון</th>
            <th>נוכחות</th>
            <th>הערות</th>
          </tr>
        </thead>
        <tbody className="body-groups">
          {students.map((student, index) => (
            <tr className="rows-groups" key={index} >
              <td>{student.name}</td>
              <td>{student.afraidOfWater ? "v" : "x"}</td>
              <td>{student.adaptation ? "v" : "x"}</td>
              <td>{student.chestLegs ? "v" : "x"}</td>
              <td>{student.chestHands ? "v" : "x"}</td>
              <td>{student.handsAndBreathing ? "v" : "x"}</td>
              <td>{student.combination ? "v" : "x"}</td>
              <td>{student.fullStyle ? "v" : "x"}</td>
              <td>{student.lessonsCount}</td>
              <td>{student.phoneNumber}</td>
              <td>{student.attendance ? "v" : "x"}</td>
              <td>{student.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default Group