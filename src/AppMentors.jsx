import React, { useState } from "react";

export default function AppMentors() {
  const [person, setPerson] = useState({
    name: "프로그래머2",
    title: "개발자",
    mentor: {
      name: "밥",
      title: "시니어 개발자",
    },
  });
  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>
        {person.name}의 멘토는 {person.mentor.name} ({person.mentor.title})
      </p>
      <button
        onClick={() => {
          const name = prompt(`What's your mentor's name?`);
          setPerson((person) => ({
            ...person,
            mentor: { ...person.mentor, name },
          }));
        }}
      >
        멘토 이름 바꾸기
      </button>
    </div>
  );
}
