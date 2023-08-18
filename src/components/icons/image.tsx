export const Image = ({ className = "" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`icon icon-tabler icon-tabler-photo-plus ${className}`}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M15 8h.01"></path>
      <path d="M12.5 21h-6.5a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v6.5"></path>
      <path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l4 4"></path>
      <path d="M14 14l1 -1c.67 -.644 1.45 -.824 2.182 -.54"></path>
      <path d="M16 19h6"></path>
      <path d="M19 16v6"></path>
    </svg>
  );
};
