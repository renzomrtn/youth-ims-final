import svgPaths from "./svg-i3svc1uwy4";
import imgLogo from "figma:asset/45d62b4154f72c9e869aa78a75208c48cc1accd0.png";
import imgFrame19 from "figma:asset/356d1ff0764e3020ee664685fd91944232027d8b.png";

function Frame5() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="font-['Source_Sans_3:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[48px] text-black text-nowrap whitespace-pre">YOUTH</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0">
      <Frame5 />
      <p className="font-['Source_Sans_3:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[20px] text-black text-nowrap whitespace-pre">Youth Officials’ Unified Transparency Hub</p>
    </div>
  );
}

function Branding() {
  return (
    <div className="content-stretch flex gap-[18px] items-center relative shrink-0 w-full" data-name="branding">
      <div className="relative shrink-0 size-[128px]" data-name="Logo">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgLogo} />
      </div>
      <Frame4 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col items-center p-[40px] relative shrink-0 w-[1920px]">
      <Branding />
    </div>
  );
}

function Div() {
  return (
    <div className="bg-[rgba(0,0,0,0)] relative shrink-0 w-full" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-px items-center not-italic px-[55px] py-0 relative text-center w-full">
          <p className="font-['Poppins:Bold',sans-serif] h-[43px] leading-[36px] relative shrink-0 text-[30px] text-black w-[235px]">Welcome Back</p>
          <p className="font-['Poppins:Regular',sans-serif] h-[20px] leading-[20px] relative shrink-0 text-[14px] text-[rgba(5,5,5,0.5)] w-[217px]">Please sign in to your account</p>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="h-[16px] relative shrink-0 w-[14px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 16">
        <g id="Frame">
          <g clipPath="url(#clip0_17_93)">
            <path d={svgPaths.p2def7700} fill="var(--fill-0, black)" fillOpacity="0.6" id="Vector" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_17_93">
            <path d="M0 0H14V16H0V0Z" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Svg() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-center relative shrink-0 w-[14px]" data-name="svg">
      <Frame />
    </div>
  );
}

function I() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex items-center px-0 py-[3px] relative shrink-0" data-name="i">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Svg />
    </div>
  );
}

function Div1() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex items-center relative shrink-0" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <I />
    </div>
  );
}

function Input() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="input">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black text-nowrap">
        <p className="leading-[24px] whitespace-pre">Username</p>
      </div>
    </div>
  );
}

function UsernameField() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] content-stretch flex gap-[19px] h-[60px] items-center p-[10px] relative rounded-[16px] shrink-0 w-[350px]" data-name="username-field">
      <div aria-hidden="true" className="absolute border border-[#174499] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Div1 />
      <Input />
    </div>
  );
}

function Frame1() {
  return (
    <div className="h-[16px] relative shrink-0 w-[14px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 16">
        <g id="Frame">
          <g clipPath="url(#clip0_17_90)">
            <path d={svgPaths.pcd0dd00} fill="var(--fill-0, black)" fillOpacity="0.6" id="Vector" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_17_90">
            <path d="M0 0H14V16H0V0Z" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Svg1() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-center relative shrink-0 w-[14px]" data-name="svg">
      <Frame1 />
    </div>
  );
}

function I1() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex items-center px-0 py-[3px] relative shrink-0" data-name="i">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Svg1 />
    </div>
  );
}

function Div2() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex items-center px-0 py-[17px] relative shrink-0" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <I1 />
    </div>
  );
}

function Input1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="input">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black text-nowrap">
        <p className="leading-[24px] whitespace-pre">Password</p>
      </div>
    </div>
  );
}

function PasswordField() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] content-stretch flex gap-[19px] h-[60px] items-center p-[10px] relative rounded-[16px] shrink-0 w-[350px]" data-name="password-field">
      <div aria-hidden="true" className="absolute border border-[#174499] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Div2 />
      <Input1 />
    </div>
  );
}

function Input2() {
  return (
    <div className="bg-[#969696] relative rounded-[1px] shrink-0 size-[13px]" data-name="input">
      <div aria-hidden="true" className="absolute border-[0.5px] border-solid border-white inset-0 pointer-events-none rounded-[1px]" />
    </div>
  );
}

function Label() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex gap-[8px] items-center relative shrink-0" data-name="label">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Input2 />
      <p className="font-['Poppins:Regular',sans-serif] h-[20px] leading-[normal] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.8)] w-[111px]">Remember me</p>
    </div>
  );
}

function Div3() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex items-center justify-center relative shrink-0 w-[350px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Label />
    </div>
  );
}

function Space() {
  return (
    <div className="bg-[rgba(0,0,0,0)] h-[11px] relative shrink-0 w-[350px]" data-name="space">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Label1() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex items-center relative shrink-0" data-name="label">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-[rgba(249,5,5,0.8)] text-nowrap whitespace-pre">Forgot Password?</p>
    </div>
  );
}

function Div4() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex items-center justify-center relative shrink-0 w-[350px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Label1 />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#86b0ff] content-stretch flex items-center justify-center px-[142px] py-[16px] relative rounded-[16px] shrink-0" data-name="button">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[16px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_10px_15px_0px_rgba(0,0,0,0.1)]" />
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-black text-center text-nowrap whitespace-pre">Sign In</p>
    </div>
  );
}

function Form() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex flex-col gap-[15px] items-center justify-center relative shrink-0 w-full" data-name="form">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <UsernameField />
      <PasswordField />
      <Div3 />
      <Space />
      <Div4 />
      <Button />
    </div>
  );
}

function Div5() {
  return (
    <div className="bg-[#ebebeb] content-stretch flex flex-col gap-[36px] items-start p-[49px] relative rounded-[24px] shrink-0 w-[448px]" data-name="div">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25),0px_25px_100px_0px_rgba(0,0,0,0.25)]" />
      <Div />
      <Form />
    </div>
  );
}

function Frame6() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0 w-full">
      <Div5 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-center min-h-px min-w-px relative shrink-0 w-full">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgFrame19} />
      <Frame3 />
      <Frame6 />
    </div>
  );
}

export default function Login() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative size-full" data-name="LOGIN">
      <Frame2 />
    </div>
  );
}