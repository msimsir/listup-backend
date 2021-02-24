const formatDate = (date) => {
    let d = date;
    let month = d.getMonth() + 1;
    if (month < 10) {
      month = ["0", month].join("");
    }
    let day = d.getDate();
    if (day < 10) {
      day = ["0", day].join("");
    }
    const year = d.getFullYear();
    d = [day, month, year].join("-");
    return d;
  };
  
  export default formatDate;