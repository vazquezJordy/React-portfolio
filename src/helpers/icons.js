import {
    faTrash,
    faSignOutAlt,
    faEdit,
    faTrashAlt,
    faSpinner,
    faPlus,
    faPhone,
    faCompass,
    faEnvelope,
  } from "@fortawesome/free-solid-svg-icons";
  import { library } from "@fortawesome/fontawesome-svg-core";

  const Icons = () => {
    return library.add(faTrash, faSignOutAlt, faEdit, faTrashAlt, faSpinner, faPlus, faPhone, faCompass, faEnvelope);
  };

  export default Icons;