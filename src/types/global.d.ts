interface Window {
  jQuery: JQueryStatic;
}
interface Window {
  AOS: {
    init: () => void;
    refresh?: () => void;
  };
  grecaptcha: {
    getResponse: () => string;
    reset: () => void;
  };
}
