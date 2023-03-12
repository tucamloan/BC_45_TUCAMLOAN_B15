//BAÌ 1: Quản lý tuyển sinh
document.getElementById('kiemTraKetQua').onclick = function () {
  //input: diem 3 mon, diemChuan
  var diem1 = +document.getElementById('diem-mon-1').value;
  var diem2 = +document.getElementById('diem-mon-2').value;
  var diem3 = +document.getElementById('diem-mon-3').value;
  var diemChuan = +document.getElementById('diem-chuan').value;

  var khuA =document.getElementById('khu-A');
  var khuB =document.getElementById('khu-B');
  var khuC =document.getElementById('khu-C');

  var dT1 =document.getElementById('doiTuong1');
  var dT2 =document.getElementById('doiTuong2');
  var dT3 =document.getElementById('doiTuong3');

  //output
  var ketQua;
  var diemTong=0;
  //process
  if (diem1 === 0 || diem2 === 0 || diem3 === 0) {
    ketQua = `Bạn đã rớt vì có môn điểm 0`;
    document.getElementById('ket-qua-b1').innerHTML = ketQua;
  }

else if (khuA.selected==true){
  khuVuc =1;
} else if (khuB.selected===true){
  khuVuc=2;
}else if (khuC.selected===true){
  khuVuc=3;
}else {
  khuVuc=0;
}
if (khuVuc===1){
  diemCong1 = 2;
}else if (khuVuc===2) {
  diemCong1 = 1;
}else if (khuVuc===3) {
  diemCong1 = 0.5;
}else  {
  diemCong1 = 0;
}


if (dT1.selected===true){
  doiTuong =1;
} else if (dT2.selected===true){
  doiTuong=2;
}else if (dT3.selected===true){
  doiTuong=3;
}else {
  doiTuong=0;
}

if (doiTuong===1){
  diemCong2 = 2.5;
}else if (doiTuong===2) {
  diemCong2 = 1.5;
}else if (doiTuong===3) {
  diemCong2 = 1;
}else  {
  diemCong2 = 0;
}

var diemTong = (diem1 + diem2 + diem3 + diemCong1 + diemCong2);
  if (diemTong >= diemChuan) {
    ketQua = 'Chúc mừng bạn đã đậu';
  } else {
    ketQua = 'Xin chia buồn. Bạn đã rớt';
  }

  document.getElementById('ket-qua-b1').innerHTML =
  `Điểm tổng: ${diemTong} <br/>
Kết quả: ${ketQua}`;
}

//bài 2:
document.getElementById('tinh-tien-dien').onclick=function(){
  //inputL soLuong, donGia =>>number
  var hoTen = document.getElementById('ho-ten').value;
  var soKW = +document.getElementById('kw').value;
//output
var tongTienDien=0;
//process
if (soKW>0 && soKW<=50) {
  tongTienDien=soKW * 500;
}
else if (soKW>50 && soKW<=100){
  tongTienDien =50 *500 + (soKW-50)*650;
}
else if (soKW>100 && soKW<=200){
  tongTienDien =50 *500 + 50*650 + (soKW-100)*850;
}
else if (soKW>200&& soKW<=350){
  tongTienDien =50 *500 + 50*650 + 100*850+ (soKW-200)*1100;
}
else {
  tongTienDien =50 *500 + 50*650 + 100*850+ 150*1100 + (soKW-350)*1300;
}
document.getElementById('ket-qua-b2').innerHTML=
` Khách hàng: ${hoTen} <br />
Tiền điện của bạn là: ${tongTienDien} VND`;
}
//bài 3:
document.getElementById('tinh-tien-thue').onclick=function(){
  //inputL >number
  var hoVaTen = document.getElementById('ho-va-ten').value;
  var thuNhap = document.getElementById('thu-nhap').value;
  var phuThuoc = +document.getElementById('nguoi-phu-thuoc').value;
  var thuNhapChiuThue= thuNhap -(4e+6)-(phuThuoc*1.6e+6);
//output
var thueThuNhap =0;
var x =thuNhapChiuThue;
//process
if (x>0 && x <=60e+6){
  thueThuNhap= (x *0.05).toLocaleString();
} else if (x>60e+6 && x <=120e+6){
  thueThuNhap= ((60e+6 *0.05)+ (x-60e+6)*0.1).toLocaleString();
} else if (x>120e+6 && x <=210e+6){
  thueThuNhap= ((60e+6 *0.05)+ (60e+6*0.1)+(x-120e+6)*0.15).toLocaleString();
} else if (x>210e+6 && x <=384e+6){
  thueThuNhap= ((60e+6 *0.05)+ (60e+6*0.1)+(90e+6*0.15)+(x-210e+6)*0.2).toLocaleString();
} else if (x>384e+6 && x <=624e+6){
  thueThuNhap= ((60e+6 *0.05)+ (60e+6*0.1)+(90e+6*0.15)+(174e+6*0.2)+(x-384e+6)*0.25).toLocaleString();
}  else if (x>624e+6 && x <=960e+6){
  thueThuNhap= ((60e+6 *0.05)+ (60e+6*0.1)+(90e+6*0.15)+(174e+6*0.2)+ (240e+6*0.25) +(x-624e+6)*0.3).toLocaleString();
} else {
  thueThuNhap= ((60e+6 *0.05)+ (60e+6*0.1)+(90e+6*0.15)+(174e+6*0.2)+ (240e+6*0.25) + (336e+6*0.3)+(x-960e+6)*0.35).toLocaleString();
} 

document.getElementById('ket-qua-b3').innerHTML=
` Khách hàng: ${hoVaTen} <br />
Tiền thuế thu nhập cá nhân của bạn là: ${thueThuNhap} VND`;
}
//bài 4:


  function tinhTienCap() {
    var maKH = document.getElementById("ma-KH").value;
    var dN = document.getElementById("doanhNghiep");
    var nD = document.getElementById("nhaDan");
    var soKetNoi = document.getElementById("soKetNoi").value*1;
    var soKenhCaoCap = document.getElementById("soKenhCaoCap").value;
    var tienXuLyHD, tienDichVu, tienKenhCaoCap, tongTien;
  
    if (dN.selected===true) {
      tienXuLyHD = 15;
      if (soKetNoi<=10){
        tienDichVu = 75;
      } else {tienDichVu = 75 + (soKetNoi - 10) * 5};
      tienKenhCaoCap = soKenhCaoCap * 50;
    } else if (nD.selected===true) {
      soKetNoi = 0; // gán giá trị mặc định cho ô nhập kết nối
      tienXuLyHD = 4.5;
      tienDichVu = 20.5;
      tienKenhCaoCap = soKenhCaoCap * 7.5;
    }
  
  tongTien = (tienXuLyHD + tienDichVu + tienKenhCaoCap).toFixed(2);


document.getElementById('ket-qua-b4').innerHTML = 
` Mã khách hàng: ${maKH} <br />
Tiền cáp: ${tongTien} $`;
  }


function handleChange () {
  var x = document.getElementById('loaiKH');
  var y = document.getElementById('soKetNoi');

  if (x.value ==='doanhNghiep') {
    y.removeAttribute('disabled');
  } else if (x.value === 'nhaDan') {
    y.setAttribute('disabled', true)
  } else if (x.value ==="chon") {
    y.setAttribute('disabled', true)
  }
}




// if (loaiKH==="doanh-nghiep"){
//   soKetNoi.style.display="block";
//   soKetNoi.disabled=false;
// }else{
//   soKetNoi.style.display="none";
//   soKetNoi.disabled=true;
//   soKetNoi.value="";
// }
// document.getElementById('tinh-tien-cap').onclick=function(){
//   var maKH =document.getElementById('ma-KH').value;
//   var soKenh =document.getElementById('kenh').value;
//   var tienXuLiHoaDon, tienDichVu, tienKenhCaoCap;
//   //output
//   var tienCap=0;
//   //process
  
//   function hienThiSoKetNoi() {
//     var loaiKH= document.getElementById('loaiKhachHang');
//     var lblSoKetNoi = document.getElementById("lbl-so-ket-noi");
//     var soKetNoi = document.getElementById("so-ket-noi");
  
//     if (loaiKH === "doanh-nghiep") {
//       lblSoKetNoi.style.display = "block";
//       soKetNoi.disabled = false;
//     } else {
//       lblSoKetNoi.style.display = "none";
//       soKetNoi.disabled = true;
//       soKetNoi.value = "";
//     }
//   }
  
//   if (loaiKH == "doanh-nghiep") {
//     tienXuLiHoaDon = 15;
//     tienDichVu = 75;
//     tienKenhCaoCap = 50;
//   } else {
//     tienXuLiHoaDon = 4.5;
//     tienDichVu = 20.5;
//     tienKenhCaoCap = 7.5;
//   }
  
//    tienCap = (tienXuLiHoaDon + tienDichVu + tienKenhCaoCap * soKenh + (soKetNoi - 10) * 5 * (soKetNoi > 10)).toFixed(2);
  
