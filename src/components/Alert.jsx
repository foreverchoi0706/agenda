import Swal from "sweetalert2";

export const loading = (text) => {
  let timerInterval;
  Swal.fire({
    title: text,
    html: "",
    timer: 500,
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading();
      // const b = Swal.getHtmlContainer().querySelector('b')
      // timerInterval = setInterval(() => {
      //   b.textContent = Swal.getTimerLeft()
      // }, 100)
    },
    willClose: () => {
      // clearInterval(timerInterval)
    },
  }).then((result) => {
    if (result.dismiss === Swal.DismissReason.timer) {
    }
  });
  return null;
};

//경고 alert
export const warningAlert = (text) => {
  Swal.fire({
    text,
    color: "#ebeff6",
    icon: "warning",
    confirmButtonColor: "#fd7a23",
  });
};

//성공 alert
export const successAlert = (text) => {
  Swal.fire({
    text,
    icon: "success",
    color: "#282d4b",
    confirmButtonColor: "#ffdc00",
  });
};

//재확인 alert
export const confirm = (text, callback) => {
  Swal.fire({
    text,
    showDenyButton: true,
    showCancelButton: false,
    confirmButtonText: "네",
    confirmButtonColor: "#4890e8",
    denyButtonText: "아니오",
    denyButtonColor: "lightgrey",
  }).then((result) => {
    console.log(result);
    if (result.isConfirmed) {
      // Swal.fire({
      //   text: "요청하신 작업이 완료되었습니다.",
      //   color: "",
      //   confirmButtonColor: "#ffdc00",
      //   icon: "success",
      //   iconColor: "#4890e8",
      // });
      callback();
    } else if (result.isDenied) {
      return;
    }
  });
};
