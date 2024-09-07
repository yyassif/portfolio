declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export const pageview = (GA_MEASUREMENT_ID: string, url: string) => {
  window?.gtag("config", GA_MEASUREMENT_ID, {
    page_path: url,
  });
};
