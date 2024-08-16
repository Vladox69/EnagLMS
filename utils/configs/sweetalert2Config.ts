import Swal from 'sweetalert2';

Swal.mixin({
  customClass: {
    denyButton:'swal2-cancel',
    cancelButton:'swal2-cancel',
    closeButton:'swal2-cancel',
    confirmButton:'swal2-confirm',
  },
  buttonsStyling: false,
});

export default Swal;
