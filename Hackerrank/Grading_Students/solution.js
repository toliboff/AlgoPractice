function gradingStudents(grades) {
  return grades.map(grade => {
      if(grade<38)return grade;
      const rounded = Math.ceil(grade/5)*5;
      if((rounded-grade)<3)return rounded;
      
      return grade;
  });

}