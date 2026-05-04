const getAvatar = (name) => {
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(
    name
  )}&background=ff0000&color=fff&size=128`;
};

export default getAvatar;