import { showMessage } from 'react-native-flash-message';

// This class throw flash message (Toast) when we trigger it.
class Toast {
  static Message = function (title:string, message:string, color?:string) {
    showMessage({
      message: title ? title : '',
      description: message ? message : '',
      backgroundColor: color,
      duration: 5000,
    });
  };
}

export default Toast;