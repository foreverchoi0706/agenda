import Swal from "sweetalert2";

//경고 alert
export const WarningAlert = (text) => {
  Swal.fire({
    text,
    color: "#ebeff6",
    icon: "warning",
    confirmButtonColor: "#fd7a23",
  });
};

//성공 alert
export const SuccessAlert = (text) => {
  Swal.fire({
    text,
    icon: "success",
    color: "#282d4b",
    confirmButtonColor: "#ffdc00",
  });
};

//재확인 alert
export const Confirm = (text, callback) => {
  Swal.fire({
    text,
    showDenyButton: true,
    showCancelButton: false,
    confirmButtonText: "네, 삭제할게요.",
    confirmButtonColor: "#4890e8",
    denyButtonText: "아니오",
    denyButtonColor: "#df242b",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        text: "요청하신 작업이 완료되었습니다.",
        color: "",
        confirmButtonColor: "#ffdc00",
        icon: "success",
        iconColor: "#4890e8",
      });
      callback();
    } else if (result.isDenied) {
      return;
    }
  });
};
