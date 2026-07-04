function combineUsers(arr1 = [], arr2 = [], arr3 = [], arr4 = []) {
  // 1. merge all arrays
  const allUsers = [...arr1, ...arr2, ...arr3, ...arr4];
  
  // 2. get today's date and format it as M/d/yyyy
  const today = new Date();
  const merge_date = `${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}`;
  
  // 3. return an object
  return {
    users: allUsers,
    merge_date: merge_date
  };
}

// Simple export that works in all labs
module.exports = { combineUsers };