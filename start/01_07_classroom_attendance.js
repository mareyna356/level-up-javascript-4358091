// Write your code here
function getStudents(classroom) {
  //[] destructures arrays, {} destructures objects
  const { hasTeachingAssistant, classList } = classroom;
  let teacher, assistant, students;
  if (hasTeachingAssistant) [teacher, assistant, ...students] = classList;
  else [teacher, ...students] = classList;
  return students;
}

const classroom = {
  hasTeachingAssistant: true,
  classList: ["John", "Connor", "Sarah", "Arnold", "Kyle"],
};
console.log(getStudents(classroom));

classroom.hasTeachingAssistant = false;
console.log(getStudents(classroom));
