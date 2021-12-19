type ImageData = {
  id: string;
  user: {
    name: string;
    profile_image: { large: string };
    portfolio_url: string;
  };
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
  };
  links: {
    download: string;
  };
  alt_description: string;
  likes: number;
  color: string;
  created_at: string;
  width: number;
  height: number;
};
export default ImageData;
