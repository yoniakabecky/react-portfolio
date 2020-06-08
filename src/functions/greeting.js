export const greeting = () => {
  let currentTime = new Date();
  let currentHour = currentTime.getHours();
  return (currentHour < 12 ? "Good Morning!" :
    currentHour < 18 ? "Good Afternoon." : "Good Evening.");
}


