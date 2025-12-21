function Text() {
  return <div className="absolute bg-[#fe0000] left-[12px] rounded-[3.35544e+07px] size-[8px] top-[8px]" data-name="Text" />;
}

export default function Text1() {
  return (
    <div className="bg-[#fff7f7] border border-[#fe0000] border-solid relative rounded-[3.35544e+07px] size-full" data-name="Text">
      <Text />
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[16px] left-[31px] text-[#e10000] text-[12px] text-nowrap top-[4px]">Flagged</p>
    </div>
  );
}