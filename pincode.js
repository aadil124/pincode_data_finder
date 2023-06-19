// const url = "https://api.postalpincode.in/pincode/";

const getData = async () => {
  try {
    const pinCode = document.querySelector("#num").value;
    if (pinCode.length > 6 || pinCode.length < 6) {
      alert("Please Enter 6 Digit Code Only!!!");
    } else {
      let response = await fetch(
        `https://api.postalpincode.in/pincode/${pinCode}`
      );
      let data = await response.json();
      console.log(data[0].PostOffice);
      // console.log(data[0].PostOffice[0].State);
      // console.log(data[0].PostOffice[0].District);
      // console.log(data[0].PostOffice[0].Name);

      if (data[0].PostOffice === null) {
        alert("You have entered a wrong pincode .Try Again!!");
      } else {
        const state = data[0].PostOffice[0].State;
        const district = data[0].PostOffice[0].District;
        const area = data[0].PostOffice[0].Name;
        const region = data[0].PostOffice[0].Region;
        document.querySelector("#state").value = state;
        document.querySelector("#district").value = district;
        document.querySelector("#area").value = area;
        document.querySelector("#region").value = region;
      }
    }

    document.querySelector("#num").value = "";
  } catch (err) {
    console.log(err);
  }
};
