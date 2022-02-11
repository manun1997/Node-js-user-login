// Form Validation Start

(function () {
  "use strict";
  window.addEventListener(
    "load",
    function () {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName("needs-validation");
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function (form) {
        form.addEventListener(
          "submit",
          function (event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }
            form.classList.add("was-validated");
          },
          false
        );
      });
    },
    false
  );
})();

//Form Validation End

function inputarray() {
  let outputarray = [] + document.getElementById("array").value;
  document.getElementById("arraydata").innerHTML =
    "Array Elements Are: [ " + outputarray + " ]";
}

//Arrray Using Map Function

// function jsondata() {
//   let obj =
//     '{"employees":[' +
//     '{"firstName":"Manu","lastName":"N" },' +
//     '{"firstName":"Manoj","lastName":"M" },' +
//     '{"firstName":"Yashwanth","lastName":"N" }]}';

//   const data = JSON.parse(obj);
//   document.getElementById("jsondemo").innerHTML = obj;

//   const datastore = (document.getElementById("jsondemo1").innerHTML =
//     " Firstname : " +
//     data.employees[0].firstName +
//     " ,\n Lastname : " +
//     data.employees[0].lastName +
//     "\n" +
//     " Firstname : " +
//     data.employees[1].firstName +
//     " , " +
//     " \n Lastname : " +
//     data.employees[1].lastName +
//     "\n" +
//     " Firstname : " +
//     data.employees[2].firstName +
//     " , " +
//     " \n Lastname : " +
//     data.employees[2].lastName);
// }

//Array of Elemenet Inserting

var x = 0;
var array = Array();

function add_element_to_array() {
  var z = document.getElementById("text1").value;

  if (z == "" || z == "null") {
    alert("Please Enter Any Values Insert Element To An Array");
  } else {
    array[x] = document.getElementById("text1").value;
    alert("Element: " + array[x] + " Added at index " + x);
    x++;
    document.getElementById("text1").value = "";
  }
}

function display_array() {
  var e = "";

  for (var i = 0; i < array.length; i++) {
    e += "Element " + i + " = " + array[i] + "\n";
  }
  document.getElementById("Result").innerHTML = e;
}

function display_map() {
  var e = "";
  console.log(e);
  for (var i = 0; i < array.length; i++) {
    var j = array[i];
    e += "Element " + i + " = " + array[i] + "\n";
  }
  const map1 = array.map((i) => i * 2);
  console.log();
  document.getElementById("Result").innerHTML =
    "Array Element Multiplied By " + j + " * 2 = " + map1;
}

function display_filter() {
  var e = "";
  console.log(e);
  for (var i = 0; i < array.length; i++) {
    var j = array[i];
    e += "Element " + i + " = " + array[i] + "\n";
  }
  const map2 = array.filter((i) => i % 2 === 0);
  if (map2 == 0) {
    document.getElementById("Result").innerHTML = "success";
  } else {
    document.getElementById("Result").innerHTML = "Not Success";
  }
}

function display_reduce() {
  var e = "";
  var result = 0;
  console.log(e);
  for (var i = 0; i < array.length; i++) {
    var j = array[i];
    e += "Element " + i + " = " + array[i] + "\n";
  }

  const map3 = array.reduce(function (result, j) {
    return result + j;
  }, 0);
  document.getElementById("Result").innerHTML = map3;
}

//Array Element Box Insert

function add() {
  let inputField = document.getElementById("input-field").value;

  if (inputField === "" || inputField === " " || inputField === null) {
    alert("Please enter your task");
  } else {
    let data = document.getElementById("list__group");
    let div = document.createElement("div");

    div.className = "main-div d-flex justify-content-between";
    data.appendChild(div);

    let input = document.createElement("input");
    input.className = "form-control w-75 my-3";
    input.value = inputField;
    input.id = input.value;
    div.appendChild(input);
    console.log(input.id);

    let edit_span = document.createElement("span");
    edit_span.innerHTML = `<i class=' my-3 text-success  fa fa-edit'></i>`;
    var value = (document.getElementById(input.id).disabled = true);
    div.appendChild(edit_span);

    let delete_span = document.createElement("span");
    delete_span.innerHTML = `<i class=' my-3 text-danger  fa fa-trash'></i>`;
    div.appendChild(delete_span);

    delete_span.addEventListener("click", (e) => {
      div.removeChild(delete_span);
      div.removeChild(edit_span);
      div.removeChild(input);
    });

    edit_span.addEventListener("click", (e) => {
      document.getElementById(input.id).disabled = false;
      let data = document.getElementById(input.id).value;
    });

    input.addEventListener("mouseout", (e) => {
      document.getElementById(input.id).disabled = true;
    });

    document.getElementById(input.id).disabled = true;
    document.getElementById("input-field").value = "";
  }
}

// Open Nav Bars
function openNav() {
  document.getElementById("mySidenav").style.width = " 250px";
  document.getElementById("main_div").style.marginLeft = " 250px";
}

// Close Nav Bars
function togglefun(x) {
  if (x.target.id == "left") {
    document.getElementById("mySidenav").style.width = "50px";
    document.getElementById("main_div").style.marginLeft = "65px";

    x.target.className = "fa fa-angle-right";
    x.target.id = "right";
  } else {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main_div").style.marginLeft = "250px";

    x.target.id = "left";
    x.target.className = "fa fa-angle-left";
  }
}

function closeNav(x) {
  document.getElementById("mySidenav").style.width = "50px";
  document.getElementById("main_div").style.marginLeft = "65px";
  // document.getElementsByClassName("span_p").style.display = "none";
}

//JSON DATA

function data_click(x) {
  document.getElementById("mySidenav").style.width = " 250px";
  document.getElementById("main_div").style.marginLeft = "250px";
  const data = [
    { icon: "fa fa-home", value: "Min Konto", path: "min_konto.html" },
    { icon: "fa fa-user-o", value: "Account", path: "minkonto_form.html" },
    {
      icon: "fa fa-credit-card",
      value: "Abonnementer",
      path: "minkonto_account.html",
    },
    {
      icon: "fa fa-circle-o",
      value: "Skkerhed personlige oplysninger ",
      path: "",
    },
    { icon: "fa fa-lock", value: "Apptilladelsel", path: "" },
    {
      icon: "fa fa-long-arrow-down",
      value: "Status for installation",
      path: "",
    },
    { icon: "fa fa-cog", value: " Indstillinger", path: "" },
  ];

  let final_data = data.map((item, index) => {
    //accessing Division
    let data_details = document.getElementById("data_details");

    //create anchor link
    let data_details_a = document.createElement("a");

    data_details_a.className = "d-flex field_font_size";
    data_details_a.href = item.path;

    //create anchor link insiede span
    let data_details_span = document.createElement("span");
    data_details_span.className = "icon_space";
    data_details_span.id = item.value;
    data_details_span.innerHTML = `<i class='icon_size ${item.icon}' aria-hidden='true'></i>`;
    data_details_a.appendChild(data_details_span);

    data_details_span.addEventListener("click", (e) => {
      icon_data = item.icon;
    });

    let second_span = document.createElement("span");
    second_span.className = "justify-content-sm-start span_p";
    second_span.innerHTML = `${item.value}`;
    second_span.id = item.value;

    let data_id = document.getElementById("left");

    data_id.addEventListener("click", (e) => {
      let class_data = data_id.className;

      console.log(class_data);

      if (class_data == "fa fa-angle-left") {
        second_span.innerHTML = `${item.value}`;
      } else {
        second_span.innerHTML = "";
      }
    });

    data_details_a.appendChild(second_span);
    data_details.appendChild(data_details_a);
  });
}

let card_rank_data = [
  {
    card_number: "01",
    card_title: "VVCE",
    card_person_name: "Kim hyun A",
    card_person_image: "assets/images/user5.jpg",
    card_address: "Mysore",
  },
  {
    card_number: "02",
    card_title: "VVIT",
    card_person_name: "Kim hyun A",
    card_person_image: "assets/images/user4.jpg",
    card_address: "Chamaraj Nagar",
  },
  {
    card_number: "03",
    card_title: "SIT",
    card_person_name: "Kim hyun A",
    card_person_image: "assets/images/user6.jpg",
    card_address: "Davanagere",
  },
  {
    card_number: "04",
    card_title: "JSS",
    card_person_name: "Kim hyun A",
    card_person_image: "assets/images/user7.jpg",
    card_address: "Udupi",
  },
  {
    card_number: "05",
    card_title: "MIT",
    card_person_name: "Kim hyun A",
    card_person_image: "assets/images/user5.jpg",
    card_address: "Ballari",
  },
  {
    card_number: "06",
    card_title: "PES",
    card_person_name: "Kim hyun A",
    card_person_image: "assets/images/user4.jpg",
    card_address: "Bagalkote",
  },
  {
    card_number: "07",
    card_title: "ATME",
    card_person_name: "Kim hyun A",
    card_person_image: "assets/images/user6.jpg",
    card_address: "Banglore",
  },
  {
    card_number: "08  ",
    card_title: "CIT",
    card_person_name: "Kim hyun A",
    card_person_image: "assets/images/user7.jpg",
    card_address: "Belguam",
  },
];

var event = new Date();
var options = { day: "numeric", month: "short", weekday: "long" };
let data_format = event.toLocaleDateString("en-US", options);

let rank_data = document.getElementById("ranking_list");
rank_data.innerHTML = `<div class="form-row">
<div class="col">
    <h3 class="headding_css mx-2 my-5">Ranking Lists</h3>
</div>
<div class="col">
    <h3 class="headding_css mx-2 my-5 float-right" id='${data_format}'">${data_format}</h3>
</div>
</div>`;
let card_slick_data = document.createElement("div");
card_slick_data.className = "card_slick ";
rank_data.appendChild(card_slick_data);

let rank_list_data_values = card_rank_data.map((item, index) => {
  let card_slick = document.createElement("div");
  card_slick.className = "card  shadow bg-white px-3 card_deck_data";
  card_slick.id = item.card_number;
  card_slick.innerHTML = `<div class="  card-body card_body_css">
          <h1 class="card-title card_title_css">${item.card_number}</h1>
          <h4 class="card-title card_title2_css mb-0 mt-5">${item.card_title}</h4>
          <p class="card-text pb-2">${item.card_person_name}</p>
      </div>
      <img src="${item.card_person_image}" id="img" class="card-img-bottom img_rounded mx-auto" alt="...">
      <div class="card-footer border-0">
          <small class="text-muted">
              <span class="footer_icons" id="icon"><i class="fa fa-download"
                      aria-hidden="true"></i></span>
              <span class="footer_icons" id="icon"><i class="fa fa-heart" aria-hidden="true"></i></span>
              <span class="footer_icons" id="icon"><i class="fa fa-share" aria-hidden="true"></i></span>
              <span class="footer_icons" id="icon"><i class="fa fa-ellipsis-h"
                      aria-hidden="true"></i></span>
          </small>
      </div>
  </div>`;

  card_slick.addEventListener("click", (e) => {
    // let card_data_student = document.createElement("div");
    // card_data_student.className = "card";
    // data.append(card_data_student);

    localStorage.setItem("id", item.card_number);
    localStorage.setItem("title", item.card_title);
    localStorage.setItem("person_name", item.card_person_name);
    localStorage.setItem("person_image", item.card_person_image);
    localStorage.setItem("address", item.card_address);

    let data_load = (window.location.href = "student_details.html");
  });
  card_slick_data.appendChild(card_slick);
});
sliderInit();

function load() {
  let id = localStorage.getItem("id");
  let title = localStorage.getItem("title");
  let person_name = localStorage.getItem("person_name");
  let person_image = localStorage.getItem("person_image");
  let address = localStorage.getItem("address");

  let img_data = (document.getElementById("img_data").src = person_image);
  let student_data = (document.getElementById("student_id").innerText = id);
  let student_name = (document.getElementById("student_name").innerText =
    person_name);
  let student_college = (document.getElementById("student_college").innerText =
    title);
  let student_address = (document.getElementById("student_address").innerHTML =
    address);
}
//

// const data = document.getElementById("student_details_data");
// let student_card_data = document.createElement("div");
// student_card_data.className =
//   "card shadow p-3 mb-5 bg-gray  student_card_css";
// student_card_data.style = "max-width:100vh";
// data.appendChild(student_card_data);
// .innerHTML = `
//   <div class="card shadow p-3 mb-5 bg-gray  student_card_css" style="max-width:100vh;">
//   <h3 class="card-title text-center shadow p-3 mb-5 bg-gray">Student Details  </h3>
//   <div class="form-row">
//   <div class="col-md-5 mb-3">
//       <div class="card image__card border-0">
//           <img src="${person_image}" id="output1" class=" justify-content-center img-thumbnail img_css"
//               alt="image one">
//       </div>
//   </div>
//   <div class="col-md-7 mb-3 my-5">
//   <div class="form-row">
//         <div class="col-sm-6">
//           <h4 for="id" class="font-weight-bold" >Student Id </h4>
//        </div>
//        <div class="col-sm-6">
//        <h4 for="id">: <span class="mx-4">${id} <span></h4>
//       </div>
//   </div>
//   <div class="form-row my-3">
//         <div class="col-sm-6">
//           <h4 for="name"  class="font-weight-bold">Student Name</h4>
//        </div>
//        <div class="col-sm-6">
//           <h4 for="name">: <span class="mx-4">${person_name} <span></h4>
//       </div>
//   </div>
//   <div class="form-row my-3">
//       <div class="col-sm-6">
//         <h4 for="College"  class="font-weight-bold">College </h4>
//       </div>
//       <div class="col-sm-6">
//          <h4 for="College">: <span class="mx-4">${title} <span></h4>
//       </div>
//   </div>
//   <div class="form-row">
//         <div class="col-sm-6">
//           <h4 for="address"  class="font-weight-bold">Address </h4>
//        </div>
//        <div class="col-sm-6">
//        <h4 for="address">: <span class="mx-4">${address} <span></h4>
//       </div>
//   </div>
//   </div>
// </div>
// </div>`);

//jsondata
$.ajax({
  type: "get",
  url: "/public//student_details.html",
  dataType: "script",
  data: data_send,
  success: function () {
    databind();
  },
});

const students = [
  {
    Student_Image: "assets/images/studen_2.jpg",
    Student_Name: "Manu",
    Student_Roll: "325cs13031",
    Student_Id: "ID2021",
    Student_Address: "Mysore",
  },

  {
    Student_Image: "assets/images/user7.jpg",
    Student_Name: "Kiran",
    Student_Roll: "325cs13032",
    Student_Id: "ID2022",
    Student_Address: "Chanmaraj Nagar",
  },
  {
    Student_Image: "assets/images/user3.jpg",
    Student_Name: "Yashwanth",
    Student_Roll: "325cs13051",
    Student_Id: "ID2023",
    Student_Address: "Mandya",
  },
  {
    Student_Image: "assets/images/user4.jpg",
    Student_Name: "Raaju",
    Student_Roll: "325cs13067",
    Student_Id: "ID2024",
    Student_Address: "Thumkur",
  },
  {
    Student_Image: "assets/images/user5.jpg",
    Student_Name: "Pavan",
    Student_Roll: "325cs13054",
    Student_Id: "ID2024",
    Student_Address: "Banglore",
  },
  {
    Student_Image: "assets/images/user6.jpg",
    Student_Name: "Prakash",
    Student_Roll: "325cs13037",
    Student_Id: "ID2030",
    Student_Address: "Belgam",
  },
];

function studentdata1() {
  let student_data = students.map((item, index) => {
    let student_details = document.getElementById("student_data");

    let div_card = document.createElement("div");
    div_card.className = "card mb-3 my-3 mr-3";
    div_card.style = "max-width: 800px";

    student_details.appendChild(div_card);

    let card_inside_div = document.createElement("div");
    card_inside_div.className = "font-weight-bold card-header text-center";
    card_inside_div.innerText = " Student Details";
    div_card.appendChild(card_inside_div);

    let row_div = document.createElement("div");
    row_div.className = "row no-gutters";
    div_card.appendChild(row_div);

    let col_div = document.createElement("div");
    col_div.className = " col-md-4";
    row_div.appendChild(col_div);

    let img_data = document.createElement("img");
    img_data.className = "img_data img-thumbnail";
    img_data.src = item.Student_Image;

    img_data.alt = "user";
    col_div.appendChild(img_data);

    let col_div_data = document.createElement("div");
    col_div_data.className = "col-md-8";
    row_div.appendChild(col_div_data);

    let card_body_data = document.createElement("div");
    card_body_data.className = "card-body";

    col_div_data.appendChild(card_body_data);

    let card_ul_data = document.createElement("ul");
    card_ul_data.className = "list-group list-group-flush ";
    card_body_data.appendChild(card_ul_data);

    let card_body_li_name = document.createElement("li");
    card_body_li_name.className = "list-group-item";
    card_ul_data.appendChild(card_body_li_name);

    let span_data = document.createElement("span");
    span_data.className = "font-weight-bold";
    span_data.innerHTML = `Name: ${item.Student_Name}`;
    card_body_li_name.appendChild(span_data);

    let card_body_li_roll = document.createElement("li");
    card_body_li_roll.className = "list-group-item";
    card_ul_data.appendChild(card_body_li_roll);

    let span_data_roll = document.createElement("span");
    span_data_roll.className = "font-weight-bold";
    span_data_roll.innerHTML = `Roll_no: ${item.Student_Roll}`;
    card_body_li_roll.appendChild(span_data_roll);

    let card_body_li_id = document.createElement("li");
    card_body_li_id.className = "list-group-item";
    card_ul_data.appendChild(card_body_li_id);

    let span_data_id = document.createElement("span");
    span_data_id.className = "font-weight-bold";
    span_data_id.innerHTML = `Id: ${item.Student_Id}`;
    card_body_li_id.appendChild(span_data_id);

    let card_body_li_address = document.createElement("li");
    card_body_li_address.className = "list-group-item";
    card_ul_data.appendChild(card_body_li_address);

    let span_data_address = document.createElement("span");
    span_data_address.className = "font-weight-bold";
    span_data_address.innerHTML = `Address: ${item.Student_Address}`;
    card_body_li_address.appendChild(span_data_address);
  });
}

function sliderInit() {
  $(".card_slick").slick({
    slides: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          slides: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
}

sliderInit();

function load1(event) {
  var image = document.getElementById("output1");
  image.src = URL.createObjectURL(event.target.files[0]);
  console.log(loadFile1);
}
