interface Props {
  i: number;
}

export const NewLink = ({ i }: Props) => {
  const platforms = [
    { name: "Instagram", value: "instagram" },
    { name: "Twitter", value: "twitter" },
    { name: "Facebook", value: "facebook" },
    { name: "TikTok", value: "tiktok" },
    { name: "YouTube", value: "youtube" },
    { name: "LinkedIn", value: "linkedin" },
    { name: "Snapchat", value: "snapchat" },
    { name: "Pinterest", value: "pinterest" },
    { name: "Reddit", value: "reddit" },
    { name: "Twitch", value: "twitch" },
    { name: "OnlyFans", value: "onlyfans" },
    { name: "Website", value: "website" },
    { name: "Other", value: "other" },
  ];

  return (
    <div className="border px-5 py-5 rounded-md bg-[#FAFAFA] text-[#363636]">
      <h1 className="font-bold mb-3">Link {i + 1}</h1>

      <div className="flex flex-col gap-1">
        <label htmlFor="platform" className="text-[13px]">
          Platform
        </label>
        <select
          className="border px-3 outline-none py-2 bg-white rounded-md cursor-pointer"
          id="platform"
        >
          {platforms.map((platform) => (
            <option key={platform.name} value={platform.value}>
              {platform.name}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-1 mt-5">
        <label htmlFor="link" className="text-[13px]">
          Link
        </label>
        <input
          type="tex"
          id="link"
          className="border px-3 outline-none py-2 bg-white text-sm rounded-md"
        />
      </div>
    </div>
  );
};
