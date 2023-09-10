// Function to update the current UTC time

function updateUTCTime() {
      const utcTimeElement = document.getElementById("utcTime");
      setInterval(() => {
          const currentUTCTime = new Date().getTime(); 
          // Get current UTC time in milliseconds
          utcTimeElement.textContent = currentUTCTime.toString();
      }, 1000); 
  }
  
  function updateCurrentDayOfWeek() {
      const dayOfWeekElement = document.getElementById("dayOfWeek");
      const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      
      const currentDate = new Date();
      const currentDayOfWeek = daysOfWeek[currentDate.getUTCDay()];
      dayOfWeekElement.textContent = currentDayOfWeek;
  }
  
  updateUTCTime();
  updateCurrentDayOfWeek();
  