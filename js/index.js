// Bài 1: Quản lý tuyển sinh
// Mô hình 3 khối
// Khối 1: Input
/*
    - Điểm chuẩn: diemChuan
    - Điểm 3 môn: diem1, diem2, diem3
    - Khu vực ưu tiên: khuVuc
    - Đối tượng ưu tiên: doiTuong
*/
// Khối 2: Các bước xử lý
/*
    - Bước 1: Tạo và gán giá trị cho các biến
    - Bước 2: Tính tổng điểm 3 môn
    - Bước 3: Tính tổng điểm 3 môn + điểm khu vực + điểm đối tượng
    - Bước 4: So sánh tổng điểm với điểm chuẩn
    - Bước 5: Hiển thị kết quả
*/
// Khối 3: Output
/*
    - Hiển thị kết quả lên UI
*/

// Bài làm:
function calcScore() {
  let diemChuan = document.getElementById("inputBenchmark").value;
  let diem1 = Number(document.getElementById("inputScore1").value);
  let diem2 = Number(document.getElementById("inputScore2").value);
  let diem3 = Number(document.getElementById("inputScore3").value);
  let khuVuc = Number(document.getElementById("inputArea").value);
  let doiTuong = Number(document.getElementById("inputObject").value);
  let check = !0;

  let tongDiem3Mon = diem1 + diem2 + diem3;
  let tongDiem = tongDiem3Mon + khuVuc + doiTuong;

  if (
    (check &=
      isCheckBenchmark(diem1) &&
      isCheckBenchmark(diem2) &&
      isCheckBenchmark(diem3))
  ) {
    if (tongDiem >= diemChuan) {
      document.querySelector(
        ".result__Score"
      ).innerHTML = `Bạn đã đậu. Tổng điểm: ${tongDiem}`;
    } else {
      document.querySelector(
        ".result__Score"
      ).innerHTML = `Bạn đã rớt. Tổng điểm: ${tongDiem}`;
    }
  } else {
    document.querySelector(".result__Score").innerHTML =
      "Kết quả: Rớt. Do điểm nhỏ hơn điểm chuẩn hoặc bằng 0.";
  }
}

// Kiểm tra điểm chuẩn
function isCheckBenchmark(diemChuan) {
  return diemChuan >= 0;
}

// Bài 2: Tính tiền điện
// Mô hình 3 khối
// Khối 1: Input
/*
    Họ tên: inputName
    Kw Điện: inputKwDien
*/
// Khối 2: Các bước xử lý
/*
    - Bước 1: Tạo và gán giá trị cho các biến
    - Bước 2: So sánh số kw điện:
        + 50Kw đầu: kw Điện * 500
        + từ 50 đến 100: 50 * 500 + (kw Điện - 50) * 650
        + từ 100 đến 150: 50 * 500 + 50 * 650 + (kw Điện - 100) * 850 
        + từ 150 đến 350: 50 * 500 + 50 * 650 + 100 * 850 + (kw Điện - 150) * 1100
        + còn lại: 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (kw Điện - 350) * 1300;
    - Bước 4: Hiển thị kết quả
*/
// Khối 3: Output
/*
    - Hiển thị kết quả lên UI
*/

const kw_1 = 500,
  kw_2 = 650,
  kw_3 = 850,
  kw_4 = 1100,
  kw_5 = 1300;

function calcElectric() {
  let inputName = document.querySelector("#inputName").value;
  let inputKwDien = +document.querySelector("#inputKwDien").value;
  let total = 0;

  if (inputKwDien > 0 && inputKwDien <= 50) {
    total = inputKwDien * kw_1;
  } else if (inputKwDien > 50 && inputKwDien <= 100) {
    total = 50 * kw_1 + (inputKwDien - 50) * kw_2;
  } else if (inputKwDien > 100 && inputKwDien <= 150) {
    total = 50 * kw_1 + 50 * kw_2 + (inputKwDien - 100) * kw_3;
  } else if (inputKwDien > 150 && inputKwDien <= 350) {
    total = 50 * kw_1 + 50 * kw_2 + 100 * kw_3 + (inputKwDien - 150) * kw_4;
  } else {
    total =
      50 * kw_1 +
      50 * kw_2 +
      100 * kw_3 +
      150 * kw_4 +
      (inputKwDien - 350) * kw_5;
  }

  (total = new Intl.NumberFormat("vn-VN").format(total)),
    (document.querySelector(
      ".result__Electric"
    ).innerHTML = `Họ tên: ${inputName}; Tiền điện: ${total}`);
}

// Bài 3: Tính thuế thu nhập cá nhân
// Mô hình 3 khối
// Khối 1: Input
/*
    Họ tên: inputName2
    Tổng thu nhập năm: inputSalary
    Người phụ thuộc: inputUser
*/
// Khối 2: Các bước xử lý
/*
    - Bước 1: Tạo và gán giá trị cho các biến
    - Bước 2: Tính thuế
      + totalTax = inputSalaryYear - 4e6 - inputUser * 16e5;
    - Bước 3: Tính tổng tiền thu nhập cá nhân
    - Bước 4: Hiển thị kết quả
*/
// Khối 3: Output
/*
    - Hiển thị kết quả lên UI
*/

function calcSalary() {
  var inputName2 = document.getElementById("inputName2").value,
    inputSalaryYear = +document.getElementById("inputSalaryYear").value,
    inputUser = +document.getElementById("inputUser").value,
    toalSalary = 0;

  totalTax = inputSalaryYear - 4e6 - inputUser * 16e5;

  if (totalTax > 0 && totalTax <= 6e7) {
    toalSalary = 0.05 * totalTax;
  } else if (totalTax > 6e7 && totalTax <= 12e7) {
    toalSalary = 0.1 * totalTax;
  } else if (totalTax > 12e7 && totalTax <= 21e7) {
    totalSalary = 0.15 * totalTax;
  } else if(totalTax > 21e7 && totalTax <= 384e6){
    totalSalary = 0.2 * totalTax;
  } else if(totalTax > 384e6 && totalTax <= 624e6){
    totalSalary = 0.25 * totalTax;
  } else if(totalTax > 624e6 && totalTax <= 96e7){
    totalSalary = 0.3 * totalTax;
  } else if(totalTax > 96e7){
    totalSalary = 0.35 * totalTax;
  }else{
    alert("Số tiền thu nhập không hợp lệ");
  }

  (toalSalary = new Intl.NumberFormat("vn-VN").format(toalSalary)),
    (document.querySelector(".result__Salary").innerHTML =
      "Họ tên: " +
      inputName2 +
      "; Tiền thuế thu nhập cá nhân: " +
      toalSalary +
      " VND");
}

// Bài 4: Tính tiền cáp
// Mô hình 3 khối
// Khối 1: Input
/*
    Chọn option: inputState + Nhà dân
                + Nếu chọn doanh nghiệp sẽ có thêm ô nhập số kết nối
    Nhập mã khách hàng: inputIDUser
    NHập kênh cao cấp: inputHigher
    Kênh kết nối: inputNumberConnect
*/
// Khối 2: Các bước xử lý
/*
    - Bước 1: Tạo và gán giá trị cho các biến
    - Bước 2: Tính tổng: total = inputState + inputIDUser + inputHigher * inputNumberConnect    
    - Bước 3: Phân loại tiền cáp:
          + Nếu là doanh nghiệp thì inputState = 15; inputIDUser = 75; inputHigher = 50
          Với inputNumberConnect thì thêm 5$
          + Nếu là nhà dân thì inputState = 4.5; inputIDUser = 20.5; inputHigher = 7.5
    - Bước 4: Hiển thị kết quả
*/
// Khối 3: Output
/*
    - Hiển thị kết quả lên UI
*/

function changeInputHandle(){
  let inputState = document.querySelector("#inputState").value;
  document.querySelector("#inputNumberConnect").style.display = "doanhNghiep" == inputState ? "block" : "none";
}

function calcTienCap(){
  let inputState = document.querySelector("#inputState").value;
  let inputIDUser = document.querySelector("#inputIDUser").value;
  let inputHigher = document.querySelector("#inputHigher").value;
  let inputNumberConnect = document.querySelector("#inputNumberConnect").value;
  let t = 0;

  if("doanhNghiep" == inputState){
    t = calcTotal(15, 75, 50, inputHigher, inputNumberConnect, 5);
  } else if("nhaDan" == inputState){
    t = calcTotal(4.5, 20.5, 7.5, inputHigher, 0, 0);
  } else {
    alert("Hãy chọn loại khách hàng")
  }

  document.querySelector(".result__TienCap").innerHTML = "Mã khách hàng: " + inputIDUser + "; Tiền cáp: " + new Intl.NumberFormat("en-US",{
    style: "currency",
    currency: "USD"
}).format(t)
}

function calcTotal(inputState, inputIDUser, inputHigher, inputNumberConnect, t, n){
  var total = inputState + inputIDUser + inputHigher * inputNumberConnect;
  return t > 10 && (total += (t - 10) * n), total;
}