import svgPaths from "./svg-3a455gq3tc";
import imgImage from "figma:asset/c6312101b508e020b1af49fbf6d06ab49490206b.png";
import imgImage1 from "figma:asset/2011bcbaee24b0431327d9b378a71b4cc54cbe62.png";
import imgImage2 from "figma:asset/78b051ea5bfd363ab0a6dddf635877fcdde3673d.png";
import imgImage3 from "figma:asset/ccd235adb633fc38796cfce3eb01c5a4cca71c79.png";
import imgImage4 from "figma:asset/58ae4ec59106469eb2ba1094f3c07ee4967cdf5f.png";
import imgImage5 from "figma:asset/aa8619168ff3982a08bd40e6c02a2f0cd1835c8a.png";
import imgImage6 from "figma:asset/c00a56a9af37a6e5beaf7f1ff90969276c7dd6f2.png";
import imgImage7 from "figma:asset/2735cd664a3dcd1351259f51ee9fdb769c57cb6d.png";
import imgImage8 from "figma:asset/88ef421c6b69c6d477dd71c462703a207ed97545.png";

function Logo() {
  return (
    <div className="h-[24px] relative shrink-0 w-[129.707px]" data-name="Logo">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 129.707 24">
        <g id="Logo">
          <path d={svgPaths.p11410700} fill="var(--fill-0, #F3DFD8)" id="Vector" />
          <path d={svgPaths.p2003f280} fill="var(--fill-0, #F3DFD8)" id="Vector_2" />
          <path d={svgPaths.p96abd00} fill="var(--fill-0, #F3DFD8)" id="Vector_3" />
          <path d={svgPaths.p2968ea00} fill="var(--fill-0, #F3DFD8)" id="Vector_4" />
          <path d={svgPaths.pc70c9f2} fill="var(--fill-0, #F3DFD8)" id="Vector_5" />
          <path d={svgPaths.p2c86a580} fill="var(--fill-0, #F3DFD8)" id="Vector_6" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#0f0f0f] content-stretch flex items-center px-[24px] py-[18px] relative rounded-[12px] shrink-0" data-name="Button">
      <p className="font-['Roboto_Mono:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#81807e] text-[18px] text-center uppercase whitespace-nowrap">Home</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#0f0f0f] content-stretch flex items-center px-[24px] py-[18px] relative rounded-[12px] shrink-0" data-name="Button">
      <p className="font-['Roboto_Mono:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#81807e] text-[18px] text-center uppercase whitespace-nowrap">Services</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#0f0f0f] content-stretch flex items-center px-[24px] py-[18px] relative rounded-[12px] shrink-0" data-name="Button">
      <p className="font-['Roboto_Mono:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#81807e] text-[18px] text-center uppercase whitespace-nowrap">Projects</p>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#0f0f0f] content-stretch flex items-center px-[24px] py-[18px] relative rounded-[12px] shrink-0" data-name="Button">
      <p className="font-['Roboto_Mono:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#81807e] text-[18px] text-center uppercase whitespace-nowrap">About</p>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[#0f0f0f] content-stretch flex items-center px-[24px] py-[18px] relative rounded-[12px] shrink-0" data-name="Button">
      <p className="font-['Roboto_Mono:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#81807e] text-[18px] text-center uppercase whitespace-nowrap">Careers</p>
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-[#0f0f0f] content-stretch flex items-center px-[24px] py-[18px] relative rounded-[12px] shrink-0" data-name="Button">
      <p className="font-['Roboto_Mono:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#e7beb1] text-[18px] text-center uppercase whitespace-nowrap">Blogs</p>
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-[#ce7d63] content-stretch flex items-center px-[24px] py-[18px] relative rounded-[12px] shrink-0" data-name="Button">
      <p className="font-['Roboto_Mono:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#0f0f0f] text-[18px] text-center uppercase whitespace-nowrap">Contact Us</p>
    </div>
  );
}

function ButtonsContainer() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Buttons Container">
      <Button />
      <Button1 />
      <Button2 />
      <Button3 />
      <Button4 />
      <Button5 />
      <Button6 />
    </div>
  );
}

function Navbar() {
  return (
    <div className="absolute bg-[#1a1a1a] content-stretch flex items-center justify-between left-[50px] pl-[50px] pr-[24px] py-[24px] rounded-[16px] top-[30px] w-[1820px]" data-name="Navbar">
      <div aria-hidden="true" className="absolute border border-[#1c1c21] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Logo />
      <ButtonsContainer />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p3261280} fill="var(--fill-0, #E7BEB1)" fillRule="evenodd" id="Vector 431 (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Button7() {
  return (
    <div className="bg-[#1a1a1a] content-stretch flex items-start p-[20px] relative rounded-[100px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#262626] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <Icon />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Container">
      <Button7 />
      <p className="font-['Roboto_Mono:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#b3b3b2] text-[20px] uppercase whitespace-nowrap">View All</p>
    </div>
  );
}

function SubContainer() {
  return (
    <div className="bg-[#1a1a1a] relative rounded-[16px] shrink-0 w-full" data-name="Sub Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[50px] relative w-full">
          <p className="flex-[1_0_0] font-['Roboto_Flex:SemiBold',sans-serif] font-semibold leading-[normal] min-h-px min-w-px not-italic relative text-[#f9efec] text-[48px] uppercase" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
            Frequently Asked Questions
          </p>
          <Container1 />
        </div>
      </div>
    </div>
  );
}

function TextContainer() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[30px] items-start min-h-px min-w-px relative self-stretch" data-name="Text Container">
      <p className="font-['Roboto_Flex:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#f9efec] text-[22px] w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        How long does it take to complete a web development project?
      </p>
      <div className="h-0 relative shrink-0 w-full" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 832 1">
            <line id="Line" stroke="var(--stroke-0, #262626)" x2="832" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <p className="font-['Roboto_Flex:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#b3b3b2] text-[18px] w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>{`The timeline varies depending on the project's complexity and requirements. Our team strives to deliver projects on time while maintaining the highest quality standards.`}</p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p3da07f00} fill="var(--fill-0, #E7BEB1)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button8() {
  return (
    <div className="bg-[#1f1f1f] content-stretch flex items-start p-[14px] relative rounded-[100px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#333] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <Icon1 />
    </div>
  );
}

function FaqItemOpen() {
  return (
    <div className="bg-[#1a1a1a] relative rounded-[16px] shrink-0 w-full" data-name="FAQ Item Open">
      <div className="content-stretch flex gap-[50px] items-start p-[60px] relative w-full">
        <TextContainer />
        <Button8 />
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p77ba800} fill="var(--fill-0, #E7BEB1)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button9() {
  return (
    <div className="bg-[#1f1f1f] content-stretch flex items-start p-[14px] relative rounded-[100px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#333] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <Icon2 />
    </div>
  );
}

function FaqItem() {
  return (
    <div className="bg-[#1a1a1a] relative rounded-[16px] shrink-0 w-full" data-name="FAQ Item">
      <div aria-hidden="true" className="absolute border border-[#1f1f1f] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[30px] items-center px-[60px] py-[40px] relative w-full">
          <p className="flex-[1_0_0] font-['Roboto_Flex:Medium',sans-serif] font-medium leading-[normal] min-h-px min-w-px not-italic relative text-[#f9efec] text-[22px]" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
            Can you handle large-scale mobile app development projects?
          </p>
          <Button9 />
        </div>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p77ba800} fill="var(--fill-0, #E7BEB1)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button10() {
  return (
    <div className="bg-[#1f1f1f] content-stretch flex items-start p-[14px] relative rounded-[100px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#333] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <Icon3 />
    </div>
  );
}

function FaqItem1() {
  return (
    <div className="bg-[#1a1a1a] relative rounded-[16px] shrink-0 w-full" data-name="FAQ Item">
      <div aria-hidden="true" className="absolute border border-[#1f1f1f] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[30px] items-center px-[60px] py-[40px] relative w-full">
          <p className="flex-[1_0_0] font-['Roboto_Flex:Medium',sans-serif] font-medium leading-[normal] min-h-px min-w-px not-italic relative text-[#f9efec] text-[22px]" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
            Can you integrate third-party APIs into our mobile app?
          </p>
          <Button10 />
        </div>
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p77ba800} fill="var(--fill-0, #E7BEB1)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button11() {
  return (
    <div className="bg-[#1f1f1f] content-stretch flex items-start p-[14px] relative rounded-[100px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#333] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <Icon4 />
    </div>
  );
}

function FaqItem2() {
  return (
    <div className="bg-[#1a1a1a] relative rounded-[16px] shrink-0 w-full" data-name="FAQ Item">
      <div aria-hidden="true" className="absolute border border-[#1f1f1f] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[30px] items-center px-[60px] py-[40px] relative w-full">
          <p className="flex-[1_0_0] font-['Roboto_Flex:Medium',sans-serif] font-medium leading-[normal] min-h-px min-w-px not-italic relative text-[#f9efec] text-[22px]" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
            How do you ensure cross-platform compatibility for mobile apps?
          </p>
          <Button11 />
        </div>
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p77ba800} fill="var(--fill-0, #E7BEB1)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button12() {
  return (
    <div className="bg-[#1f1f1f] content-stretch flex items-start p-[14px] relative rounded-[100px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#333] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <Icon5 />
    </div>
  );
}

function FaqItem3() {
  return (
    <div className="bg-[#1a1a1a] relative rounded-[16px] shrink-0 w-full" data-name="FAQ Item">
      <div aria-hidden="true" className="absolute border border-[#1f1f1f] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[30px] items-center px-[60px] py-[40px] relative w-full">
          <p className="flex-[1_0_0] font-['Roboto_Flex:Medium',sans-serif] font-medium leading-[normal] min-h-px min-w-px not-italic relative text-[#f9efec] text-[22px]" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
            What is your approach to user experience (UX) design?
          </p>
          <Button12 />
        </div>
      </div>
    </div>
  );
}

function ItemsContainer() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-start min-h-px min-w-px relative" data-name="Items Container">
      <FaqItemOpen />
      <FaqItem />
      <FaqItem1 />
      <FaqItem2 />
      <FaqItem3 />
    </div>
  );
}

function InputField() {
  return (
    <div className="bg-[#0f0f0f] relative rounded-[10px] shrink-0 w-full" data-name="Input Field">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[24px] relative w-full">
          <p className="flex-[1_0_0] font-['Roboto_Flex:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px not-italic relative text-[#676665] text-[18px]" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
            Enter your name
          </p>
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Roboto_Flex:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#f3dfd8] text-[18px] uppercase w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Name
      </p>
      <InputField />
    </div>
  );
}

function InputField1() {
  return (
    <div className="bg-[#0f0f0f] relative rounded-[10px] shrink-0 w-full" data-name="Input Field">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[24px] relative w-full">
          <p className="flex-[1_0_0] font-['Roboto_Flex:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px not-italic relative text-[#676665] text-[18px]" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
            Enter your email
          </p>
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Roboto_Flex:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#f3dfd8] text-[18px] uppercase w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Email
      </p>
      <InputField1 />
    </div>
  );
}

function InputField2() {
  return (
    <div className="bg-[#0f0f0f] h-[172px] relative rounded-[10px] shrink-0 w-full" data-name="Input Field">
      <div className="content-stretch flex items-start p-[24px] relative size-full">
        <p className="flex-[1_0_0] font-['Roboto_Flex:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px not-italic relative text-[#676665] text-[18px]" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
          Enter Your Question Here .....
        </p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Roboto_Flex:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#f3dfd8] text-[18px] uppercase w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Your Question
      </p>
      <InputField2 />
    </div>
  );
}

function FormElements() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Form Elements">
      <Container2 />
      <Container3 />
      <Container4 />
    </div>
  );
}

function Button13() {
  return (
    <div className="bg-[#ce7d63] relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[24px] py-[18px] relative w-full">
          <p className="font-['Roboto_Flex:Medium',sans-serif] font-medium leading-[1.5] not-italic relative shrink-0 text-[#0f0f0f] text-[18px] text-center uppercase whitespace-nowrap" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
            Send Your Message
          </p>
        </div>
      </div>
    </div>
  );
}

function Form() {
  return (
    <div className="bg-[#1a1a1a] content-stretch flex flex-col gap-[50px] items-center justify-center p-[60px] relative rounded-[14px] shadow-[10px_10px_50px_0px_rgba(0,98,255,0.03)] shrink-0 w-[746px]" data-name="Form">
      <p className="font-['Roboto_Flex:Medium',sans-serif] font-medium leading-[1.5] not-italic relative shrink-0 text-[#f9efec] text-[24px] uppercase w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Ask your question
      </p>
      <div className="h-0 relative shrink-0 w-full" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 626 1">
            <line id="Line" stroke="var(--stroke-0, #262626)" x2="626" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <FormElements />
      <Button13 />
    </div>
  );
}

function FaqContainer() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full" data-name="FAQ Container">
      <ItemsContainer />
      <Form />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute bottom-[1279px] content-stretch flex flex-col gap-[20px] items-start left-[50px] w-[1820px]" data-name="Container">
      <SubContainer />
      <FaqContainer />
    </div>
  );
}

function TextContainer1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[1.5] min-h-px min-w-px not-italic relative" data-name="Text Container">
      <p className="font-['Roboto_Flex:Medium',sans-serif] font-medium relative shrink-0 text-[#0f0f0f] text-[58px] uppercase w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Ready to Transform Your Digital Presence?
      </p>
      <p className="font-['Roboto_Flex:Regular',sans-serif] font-normal relative shrink-0 text-[#262626] text-[18px] w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Take the first step towards digital success with NexGen by your side. Our team of experts is eager to craft tailored solutions that drive growth for your business.
      </p>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p3261280} fill="var(--fill-0, #E7BEB1)" fillRule="evenodd" id="Vector 431 (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Button14() {
  return (
    <div className="bg-[#0f0f0f] content-stretch flex gap-[10px] items-center justify-center px-[34px] py-[18px] relative rounded-[12px] shrink-0" data-name="Button">
      <p className="font-['Roboto_Flex:Medium',sans-serif] font-medium leading-[1.5] not-italic relative shrink-0 text-[#f3dfd8] text-[18px] text-center uppercase whitespace-nowrap" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Get in Touch
      </p>
      <Icon6 />
    </div>
  );
}

function SubContainer1() {
  return (
    <div className="bg-[#ce7d63] relative rounded-[20px] shrink-0 w-full" data-name="Sub Container">
      <div className="flex flex-row items-end justify-center size-full">
        <div className="content-stretch flex gap-[250px] items-end justify-center p-[80px] relative w-full">
          <TextContainer1 />
          <Button14 />
        </div>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0" data-name="Container">
      <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#676665] text-[20px] uppercase whitespace-nowrap">Follow Us on Social Media</p>
      <div className="relative shrink-0 size-[7px]" data-name="Shape">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, #CE7D63)" id="Shape" r="3.5" />
        </svg>
      </div>
      <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#676665] text-[20px] uppercase whitespace-nowrap">Follow Us on Social Media</p>
      <div className="relative shrink-0 size-[7px]" data-name="Shape">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, #CE7D63)" id="Shape" r="3.5" />
        </svg>
      </div>
      <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#676665] text-[20px] uppercase whitespace-nowrap">Follow Us on Social Media</p>
      <div className="relative shrink-0 size-[7px]" data-name="Shape">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, #CE7D63)" id="Shape" r="3.5" />
        </svg>
      </div>
      <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#676665] text-[20px] uppercase whitespace-nowrap">Follow Us on Social Media</p>
      <div className="relative shrink-0 size-[7px]" data-name="Shape">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, #CE7D63)" id="Shape" r="3.5" />
        </svg>
      </div>
      <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#676665] text-[20px] uppercase whitespace-nowrap">Follow Us on Social Media</p>
      <div className="relative shrink-0 size-[7px]" data-name="Shape">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, #CE7D63)" id="Shape" r="3.5" />
        </svg>
      </div>
      <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#676665] text-[20px] uppercase whitespace-nowrap">Follow Us on Social Media</p>
    </div>
  );
}

function SubContainer2() {
  return (
    <div className="bg-[#1a1a1a] relative rounded-[12px] shrink-0 w-full" data-name="Sub Container">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[20px] relative w-full">
          <Container6 />
        </div>
      </div>
    </div>
  );
}

function Logo1() {
  return (
    <div className="absolute inset-[8.33%_8.31%]" data-name="Logo 2">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.3491 28.3333">
        <g id="Logo 2">
          <path d={svgPaths.pbff5500} fill="var(--fill-0, #CE7D63)" id="Vector" />
          <path d={svgPaths.pbff5500} fill="var(--fill-0, #CE7D63)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[34px]" data-name="Icon">
      <Logo1 />
    </div>
  );
}

function IconContainer() {
  return (
    <div className="bg-[#1f1f1f] content-stretch flex items-start p-[16px] relative rounded-[12px] shrink-0" data-name="Icon Container">
      <div aria-hidden="true" className="absolute border border-[#333] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Icon7 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.pae702c0} fill="var(--fill-0, #E7BEB1)" fillRule="evenodd" id="Vector 431 (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Button15() {
  return (
    <div className="bg-[#1f1f1f] content-stretch flex items-start p-[14px] relative rounded-[100px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#333] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <Icon8 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <IconContainer />
      <Button15 />
    </div>
  );
}

function TextContainer2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start leading-[1.5] not-italic relative shrink-0 w-full" data-name="Text Container">
      <p className="font-['Roboto_Flex:Medium',sans-serif] font-medium relative shrink-0 text-[#f9efec] text-[30px] uppercase w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        INstagram
      </p>
      <p className="font-['Roboto_Flex:Regular',sans-serif] font-normal relative shrink-0 text-[#b3b3b2] text-[18px] w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Share visually appealing snippets of our latest web projects.
      </p>
    </div>
  );
}

function Card() {
  return (
    <div className="bg-[#1a1a1a] flex-[1_0_0] min-h-px min-w-px relative rounded-[14px]" data-name="Card">
      <div className="content-stretch flex flex-col gap-[80px] items-start p-[40px] relative w-full">
        <Container8 />
        <TextContainer2 />
      </div>
    </div>
  );
}

function Elements() {
  return (
    <div className="absolute inset-[12.5%_4.51%]" data-name="ELEMENTS">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30.934 25.4998">
        <g id="ELEMENTS">
          <path d={svgPaths.p7f44580} fill="var(--fill-0, #CE7D63)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Capa() {
  return (
    <div className="absolute contents inset-[12.5%_4.51%]" data-name="Capa 2">
      <Elements />
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[34px]" data-name="Icon">
      <Capa />
    </div>
  );
}

function IconContainer1() {
  return (
    <div className="bg-[#1f1f1f] content-stretch flex items-start p-[16px] relative rounded-[12px] shrink-0" data-name="Icon Container">
      <div aria-hidden="true" className="absolute border border-[#333] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Icon9 />
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.pae702c0} fill="var(--fill-0, #E7BEB1)" fillRule="evenodd" id="Vector 431 (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Button16() {
  return (
    <div className="bg-[#1f1f1f] content-stretch flex items-start p-[14px] relative rounded-[100px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#333] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <Icon10 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <IconContainer1 />
      <Button16 />
    </div>
  );
}

function TextContainer3() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start leading-[1.5] not-italic relative shrink-0 w-full" data-name="Text Container">
      <p className="font-['Roboto_Flex:Medium',sans-serif] font-medium relative shrink-0 text-[#f9efec] text-[30px] uppercase w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Twitter
      </p>
      <p className="font-['Roboto_Flex:Regular',sans-serif] font-normal relative shrink-0 text-[#b3b3b2] text-[18px] w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>{`Tweet about interesting coding challenges you've overcome.`}</p>
    </div>
  );
}

function Card1() {
  return (
    <div className="bg-[#1a1a1a] flex-[1_0_0] min-h-px min-w-px relative rounded-[14px]" data-name="Card">
      <div className="content-stretch flex flex-col gap-[80px] items-start p-[40px] relative w-full">
        <Container9 />
        <TextContainer3 />
      </div>
    </div>
  );
}

function SubContainer4() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full" data-name="Sub Container">
      <Card />
      <Card1 />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[4.17%_6.41%_4.17%_5.64%]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31.2033 31.1667">
        <g id="Group 80">
          <path d={svgPaths.p2adad500} fill="var(--fill-0, #E7BEB1)" id="Vector" />
          <path d={svgPaths.p435e90} fill="var(--fill-0, #CE7D63)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Icon11() {
  return (
    <div className="h-[34px] relative shrink-0 w-[35.478px]" data-name="Icon">
      <div className="absolute inset-[0_0.46%_0.48%_4.17%]" data-name="Logo Container" />
      <Group2 />
    </div>
  );
}

function IconContainer2() {
  return (
    <div className="bg-[#1f1f1f] content-stretch flex items-start p-[16px] relative rounded-[12px] shrink-0" data-name="Icon Container">
      <div aria-hidden="true" className="absolute border border-[#333] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Icon11 />
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.pae702c0} fill="var(--fill-0, #E7BEB1)" fillRule="evenodd" id="Vector 431 (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Button17() {
  return (
    <div className="bg-[#1f1f1f] content-stretch flex items-start p-[14px] relative rounded-[100px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#333] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <Icon12 />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <IconContainer2 />
      <Button17 />
    </div>
  );
}

function TextContainer4() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start leading-[1.5] not-italic relative shrink-0 w-full" data-name="Text Container">
      <p className="font-['Roboto_Flex:Medium',sans-serif] font-medium relative shrink-0 text-[#f9efec] text-[30px] uppercase w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Dribbble
      </p>
      <p className="font-['Roboto_Flex:Regular',sans-serif] font-normal relative shrink-0 text-[#b3b3b2] text-[18px] w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Showcase design elements of our web projects.
      </p>
    </div>
  );
}

function Card2() {
  return (
    <div className="bg-[#1a1a1a] flex-[1_0_0] min-h-px min-w-px relative rounded-[14px]" data-name="Card">
      <div className="content-stretch flex flex-col gap-[80px] items-start p-[40px] relative w-full">
        <Container10 />
        <TextContainer4 />
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[20.83%_3.91%_21.56%_3.93%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31.335 19.5847">
        <g id="Group">
          <path d={svgPaths.p1fbdce00} fill="var(--fill-0, #D48E77)" id="Vector" />
          <path d={svgPaths.p2b50c478} fill="var(--fill-0, #D48E77)" id="Vector_2" />
          <path d={svgPaths.p366a2800} fill="var(--fill-0, #D48E77)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Icon13() {
  return (
    <div className="relative shrink-0 size-[34px]" data-name="Icon">
      <Group />
    </div>
  );
}

function IconContainer3() {
  return (
    <div className="bg-[#1f1f1f] content-stretch flex items-start p-[16px] relative rounded-[12px] shrink-0" data-name="Icon Container">
      <div aria-hidden="true" className="absolute border border-[#333] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Icon13 />
    </div>
  );
}

function Icon14() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.pae702c0} fill="var(--fill-0, #E7BEB1)" fillRule="evenodd" id="Vector 431 (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Button18() {
  return (
    <div className="bg-[#1f1f1f] content-stretch flex items-start p-[14px] relative rounded-[100px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#333] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <Icon14 />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <IconContainer3 />
      <Button18 />
    </div>
  );
}

function TextContainer5() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start leading-[1.5] not-italic relative shrink-0 w-full" data-name="Text Container">
      <p className="font-['Roboto_Flex:Medium',sans-serif] font-medium relative shrink-0 text-[#f9efec] text-[30px] uppercase w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Behance
      </p>
      <p className="font-['Roboto_Flex:Regular',sans-serif] font-normal relative shrink-0 text-[#b3b3b2] text-[18px] w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Create detailed presentations for our projects.
      </p>
    </div>
  );
}

function Card3() {
  return (
    <div className="bg-[#1a1a1a] flex-[1_0_0] min-h-px min-w-px relative rounded-[14px]" data-name="Card">
      <div className="content-stretch flex flex-col gap-[80px] items-start p-[40px] relative w-full">
        <Container11 />
        <TextContainer5 />
      </div>
    </div>
  );
}

function SubContainer5() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full" data-name="Sub Container">
      <Card2 />
      <Card3 />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-[748px]" data-name="Container">
      <SubContainer4 />
      <SubContainer5 />
    </div>
  );
}

function LinksContainer() {
  return (
    <div className="content-stretch flex flex-col font-['Roboto_Flex:Regular',sans-serif] font-normal gap-[18px] items-start leading-[1.5] not-italic relative shrink-0 text-[#81807e] text-[18px] w-full" data-name="Links Container">
      <p className="relative shrink-0 w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Why Us
      </p>
      <p className="relative shrink-0 w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        About Us
      </p>
      <p className="relative shrink-0 w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Testimonials
      </p>
      <p className="relative shrink-0 w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        FAQ’s
      </p>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[30px] items-start min-h-px min-w-px relative" data-name="Container">
      <p className="font-['Roboto_Mono:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#f3dfd8] text-[22px] w-full">Home</p>
      <LinksContainer />
    </div>
  );
}

function LinksContainer1() {
  return (
    <div className="content-stretch flex flex-col font-['Roboto_Flex:Regular',sans-serif] font-normal gap-[18px] items-start leading-[1.5] not-italic relative shrink-0 text-[#81807e] text-[18px] w-full" data-name="Links Container">
      <p className="relative shrink-0 w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Web Development
      </p>
      <p className="relative shrink-0 w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        App Development
      </p>
      <p className="relative shrink-0 w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Web Design
      </p>
      <p className="relative shrink-0 w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Digital Marketing
      </p>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[30px] items-start min-h-px min-w-px relative" data-name="Container">
      <p className="font-['Roboto_Mono:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#f3dfd8] text-[22px] w-full">Services</p>
      <LinksContainer1 />
    </div>
  );
}

function LinksContainer2() {
  return (
    <div className="content-stretch flex flex-col font-['Roboto_Flex:Regular',sans-serif] font-normal gap-[18px] items-start leading-[1.5] not-italic relative shrink-0 text-[#81807e] text-[18px] w-full" data-name="Links Container">
      <p className="relative shrink-0 w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Klothink
      </p>
      <p className="relative shrink-0 w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Zenith
      </p>
      <p className="relative shrink-0 w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Novus
      </p>
      <p className="relative shrink-0 w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Apex
      </p>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[30px] items-start min-h-px min-w-px relative" data-name="Container">
      <p className="font-['Roboto_Mono:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#f3dfd8] text-[22px] w-full">Projects</p>
      <LinksContainer2 />
    </div>
  );
}

function SubContainer7() {
  return (
    <div className="bg-[#262626] content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Sub Container">
      <div aria-hidden="true" className="absolute border border-[#333] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#ccc] text-[16px] tracking-[-0.48px] whitespace-nowrap">Soon</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <p className="font-['Roboto_Flex:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#81807e] text-[18px] whitespace-nowrap" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Design
      </p>
      <SubContainer7 />
    </div>
  );
}

function SubContainer8() {
  return (
    <div className="bg-[#262626] content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Sub Container">
      <div aria-hidden="true" className="absolute border border-[#333] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#ccc] text-[16px] tracking-[-0.48px] whitespace-nowrap">Soon</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <p className="font-['Roboto_Flex:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#81807e] text-[18px] whitespace-nowrap" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Development
      </p>
      <SubContainer8 />
    </div>
  );
}

function LinksContainer3() {
  return (
    <div className="content-stretch flex flex-col gap-[18px] items-start relative shrink-0 w-full" data-name="Links Container">
      <p className="font-['Roboto_Flex:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#81807e] text-[18px] w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Business
      </p>
      <Container17 />
      <Container18 />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[30px] items-start min-h-px min-w-px relative" data-name="Container">
      <p className="font-['Roboto_Mono:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#f3dfd8] text-[22px] w-full">Blogs</p>
      <LinksContainer3 />
    </div>
  );
}

function SubContainer6() {
  return (
    <div className="bg-[#1a1a1a] relative rounded-[20px] shrink-0 w-full" data-name="Sub Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[60px] items-start p-[60px] relative w-full">
          <Container13 />
          <Container14 />
          <Container15 />
          <Container16 />
        </div>
      </div>
    </div>
  );
}

function TextContainer6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start justify-center leading-[1.5] min-h-px min-w-px relative uppercase" data-name="Text Container">
      <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal relative shrink-0 text-[#676665] text-[18px] w-full">Newsletter</p>
      <p className="font-['Roboto_Flex:Medium',sans-serif] font-medium not-italic relative shrink-0 text-[#f9efec] text-[30px] w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Subscribe To our Newsletter
      </p>
    </div>
  );
}

function InputField3() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Input Field">
      <div aria-hidden="true" className="absolute border-[#333] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[20px] py-[18px] relative w-full">
          <p className="flex-[1_0_0] font-['Roboto_Flex:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px not-italic relative text-[#676665] text-[18px]" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
            Enter your email
          </p>
        </div>
      </div>
    </div>
  );
}

function Icon15() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.pae702c0} fill="var(--fill-0, #E7BEB1)" fillRule="evenodd" id="Vector 431 (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Button19() {
  return (
    <div className="bg-[#1f1f1f] content-stretch flex items-start p-[14px] relative rounded-[100px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#333] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <Icon15 />
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[20px] items-end min-h-px min-w-px relative rounded-[10px]" data-name="Container">
      <InputField3 />
      <Button19 />
    </div>
  );
}

function SubContainer9() {
  return (
    <div className="bg-[#1a1a1a] relative rounded-[16px] shrink-0 w-full" data-name="Sub Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[20px] items-center p-[50px] relative w-full">
          <TextContainer6 />
          <Container19 />
        </div>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex gap-[11px] items-center relative shrink-0" data-name="Container">
      <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#b3b3b2] text-[18px] whitespace-nowrap">{`Terms & Conditions`}</p>
      <div className="flex flex-row items-center self-stretch">
        <div className="flex h-0 items-center justify-center relative self-center shrink-0 w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "22" } as React.CSSProperties}>
          <div className="flex-none h-full rotate-90">
            <div className="h-full relative w-[27px]" data-name="Line">
              <div className="absolute inset-[-1px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 1">
                  <line id="Line" stroke="var(--stroke-0, #232329)" x2="27" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#b3b3b2] text-[18px] whitespace-nowrap">Privacy Policy</p>
    </div>
  );
}

function SubContainer10() {
  return (
    <div className="bg-[#1a1a1a] relative rounded-[16px] shrink-0 w-full" data-name="Sub Container">
      <div className="content-stretch flex items-start justify-between p-[50px] relative w-full">
        <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#b3b3b2] text-[18px] whitespace-nowrap">© 2024 NextGen. All rights reserved.</p>
        <Container20 />
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-start min-h-px min-w-px relative" data-name="Container">
      <SubContainer6 />
      <SubContainer9 />
      <SubContainer10 />
    </div>
  );
}

function SubContainer3() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full" data-name="Sub Container">
      <Container7 />
      <Container12 />
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col gap-[20px] items-center left-[49px] pb-[50px] w-[1821px]" data-name="Container">
      <SubContainer1 />
      <SubContainer2 />
      <SubContainer3 />
    </div>
  );
}

function Icon16() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p3261280} fill="var(--fill-0, #E7BEB1)" fillRule="evenodd" id="Vector 431 (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Button20() {
  return (
    <div className="bg-[#1a1a1a] content-stretch flex items-start p-[20px] relative rounded-[100px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#262626] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <Icon16 />
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Container">
      <Button20 />
      <p className="font-['Roboto_Mono:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#b3b3b2] text-[20px] uppercase whitespace-nowrap">ALL Testimonials</p>
    </div>
  );
}

function SubContainer11() {
  return (
    <div className="bg-[#1a1a1a] relative rounded-[16px] shrink-0 w-full" data-name="Sub Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[50px] relative w-full">
          <p className="flex-[1_0_0] font-['Roboto_Flex:SemiBold',sans-serif] font-semibold leading-[normal] min-h-px min-w-px not-italic relative text-[#f9efec] text-[48px] uppercase" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
            Testimonials
          </p>
          <Container22 />
        </div>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[24px] items-start leading-[1.5] not-italic p-[40px] relative w-full">
        <p className="font-['Roboto_Flex:Medium',sans-serif] font-medium relative shrink-0 text-[#f9efec] text-[24px] uppercase w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
          NexGen turned our business around!
        </p>
        <p className="font-['Roboto_Flex:Regular',sans-serif] font-normal relative shrink-0 text-[#b3b3b2] text-[18px] w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
          Their digital marketing strategies helped us reach new customers and increase our revenue by 30% within just a few months. Highly recommended!
        </p>
      </div>
    </div>
  );
}

function TextContainer7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[1.5] min-h-px min-w-px not-italic relative" data-name="Text Container">
      <p className="font-['Roboto_Flex:Medium',sans-serif] font-medium relative shrink-0 text-[#f3dfd8] text-[20px] w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Sarah Thompson
      </p>
      <p className="font-['Roboto_Flex:Regular',sans-serif] font-normal relative shrink-0 text-[#81807e] text-[18px] w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        CEO of BlueBloom
      </p>
    </div>
  );
}

function SubContainer12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[15px] items-center min-h-px min-w-px relative" data-name="Sub Container">
      <div className="relative rounded-[100px] shrink-0 size-[60px]" data-name="Image">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[100px]">
          <div className="absolute bg-[#ce7d63] inset-0 rounded-[100px]" />
          <img alt="" className="absolute max-w-none object-cover rounded-[100px] size-full" src={imgImage} />
        </div>
      </div>
      <TextContainer7 />
    </div>
  );
}

function Icon17() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p2e1cc100} id="Vector" stroke="var(--stroke-0, #E7BEB1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Button21() {
  return (
    <div className="bg-[#1f1f1f] content-stretch flex items-start p-[14px] relative rounded-[100px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#333] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <Icon17 />
    </div>
  );
}

function Container24() {
  return (
    <div className="bg-[#1f1f1f] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[40px] py-[30px] relative w-full">
          <SubContainer12 />
          <Button21 />
        </div>
      </div>
    </div>
  );
}

function Card4() {
  return (
    <div className="bg-[#1a1a1a] content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px overflow-clip relative rounded-[16px]" data-name="Card">
      <Container23 />
      <Container24 />
    </div>
  );
}

function Container25() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[24px] items-start leading-[1.5] not-italic p-[40px] relative w-full">
        <p className="font-['Roboto_Flex:Medium',sans-serif] font-medium relative shrink-0 text-[#f9efec] text-[24px] uppercase w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
          NexGen turned our business around!
        </p>
        <p className="font-['Roboto_Flex:Regular',sans-serif] font-normal relative shrink-0 text-[#b3b3b2] text-[18px] w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
          Their digital marketing strategies helped us reach new customers and increase our revenue by 30% within just a few months. Highly recommended!
        </p>
      </div>
    </div>
  );
}

function TextContainer8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[1.5] min-h-px min-w-px not-italic relative" data-name="Text Container">
      <p className="font-['Roboto_Flex:Medium',sans-serif] font-medium relative shrink-0 text-[#f3dfd8] text-[20px] w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Wade Warren
      </p>
      <p className="font-['Roboto_Flex:Regular',sans-serif] font-normal relative shrink-0 text-[#81807e] text-[18px] w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Art Director
      </p>
    </div>
  );
}

function SubContainer13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[15px] items-center min-h-px min-w-px relative" data-name="Sub Container">
      <div className="relative rounded-[100px] shrink-0 size-[60px]" data-name="Image">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[100px]">
          <div className="absolute bg-[#ce7d63] inset-0 rounded-[100px]" />
          <img alt="" className="absolute max-w-none object-cover rounded-[100px] size-full" src={imgImage1} />
        </div>
      </div>
      <TextContainer8 />
    </div>
  );
}

function Icon18() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p2e1cc100} id="Vector" stroke="var(--stroke-0, #E7BEB1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Button22() {
  return (
    <div className="bg-[#1f1f1f] content-stretch flex items-start p-[14px] relative rounded-[100px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#333] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <Icon18 />
    </div>
  );
}

function Container26() {
  return (
    <div className="bg-[#1f1f1f] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[40px] py-[30px] relative w-full">
          <SubContainer13 />
          <Button22 />
        </div>
      </div>
    </div>
  );
}

function Card5() {
  return (
    <div className="bg-[#1a1a1a] content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px overflow-clip relative rounded-[16px]" data-name="Card">
      <Container25 />
      <Container26 />
    </div>
  );
}

function Container27() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[24px] items-start leading-[1.5] not-italic p-[40px] relative w-full">
        <p className="font-['Roboto_Flex:Medium',sans-serif] font-medium relative shrink-0 text-[#f9efec] text-[24px] uppercase w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
          Working with NexGen was a pleasure.
        </p>
        <p className="font-['Roboto_Flex:Regular',sans-serif] font-normal relative shrink-0 text-[#b3b3b2] text-[18px] w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>{`Their web design team created a stunning website that perfectly captured our brand's essence. The feedback from our customers has been overwhelmingly positive.`}</p>
      </div>
    </div>
  );
}

function TextContainer9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[1.5] min-h-px min-w-px not-italic relative" data-name="Text Container">
      <p className="font-['Roboto_Flex:Medium',sans-serif] font-medium relative shrink-0 text-[#f3dfd8] text-[20px] w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Lisa Williams
      </p>
      <p className="font-['Roboto_Flex:Regular',sans-serif] font-normal relative shrink-0 text-[#81807e] text-[18px] w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        CEO Of HealthTech
      </p>
    </div>
  );
}

function SubContainer14() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[15px] items-center min-h-px min-w-px relative" data-name="Sub Container">
      <div className="relative rounded-[100px] shrink-0 size-[60px]" data-name="Image">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[100px]">
          <div className="absolute bg-[#ce7d63] inset-0 rounded-[100px]" />
          <img alt="" className="absolute max-w-none object-cover rounded-[100px] size-full" src={imgImage2} />
        </div>
      </div>
      <TextContainer9 />
    </div>
  );
}

function Icon19() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p2e1cc100} id="Vector" stroke="var(--stroke-0, #E7BEB1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Button23() {
  return (
    <div className="bg-[#1f1f1f] content-stretch flex items-start p-[14px] relative rounded-[100px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#333] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <Icon19 />
    </div>
  );
}

function Container28() {
  return (
    <div className="bg-[#1f1f1f] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[40px] py-[30px] relative w-full">
          <SubContainer14 />
          <Button23 />
        </div>
      </div>
    </div>
  );
}

function Card6() {
  return (
    <div className="bg-[#1a1a1a] content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px overflow-clip relative rounded-[16px]" data-name="Card">
      <Container27 />
      <Container28 />
    </div>
  );
}

function Container29() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[24px] items-start leading-[1.5] not-italic p-[40px] relative size-full">
        <p className="font-['Roboto_Flex:Medium',sans-serif] font-medium relative shrink-0 text-[#f9efec] text-[24px] uppercase w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>{`NexGen's web design team brought our vision to life.`}</p>
        <p className="font-['Roboto_Flex:Regular',sans-serif] font-normal relative shrink-0 text-[#b3b3b2] text-[18px] w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
          Their responsive design ensures our website looks stunning on all devices, contributing to increased user engagement.
        </p>
      </div>
    </div>
  );
}

function TextContainer10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[1.5] min-h-px min-w-px not-italic relative" data-name="Text Container">
      <p className="font-['Roboto_Flex:Medium',sans-serif] font-medium relative shrink-0 text-[#f3dfd8] text-[20px] w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Jennifer Lee
      </p>
      <p className="font-['Roboto_Flex:Regular',sans-serif] font-normal relative shrink-0 text-[#81807e] text-[18px] w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        COO of Foodie Haven
      </p>
    </div>
  );
}

function SubContainer15() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[15px] items-center min-h-px min-w-px relative" data-name="Sub Container">
      <div className="relative rounded-[100px] shrink-0 size-[60px]" data-name="Image">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[100px]">
          <div className="absolute bg-[#ce7d63] inset-0 rounded-[100px]" />
          <img alt="" className="absolute max-w-none object-cover rounded-[100px] size-full" src={imgImage} />
          <img alt="" className="absolute max-w-none object-cover rounded-[100px] size-full" src={imgImage3} />
        </div>
      </div>
      <TextContainer10 />
    </div>
  );
}

function Icon20() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p2e1cc100} id="Vector" stroke="var(--stroke-0, #E7BEB1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Button24() {
  return (
    <div className="bg-[#1f1f1f] content-stretch flex items-start p-[14px] relative rounded-[100px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#333] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <Icon20 />
    </div>
  );
}

function Container30() {
  return (
    <div className="bg-[#1f1f1f] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[40px] py-[30px] relative w-full">
          <SubContainer15 />
          <Button24 />
        </div>
      </div>
    </div>
  );
}

function Card7() {
  return (
    <div className="bg-[#1a1a1a] content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px overflow-clip relative rounded-[16px] self-stretch" data-name="Card">
      <Container29 />
      <Container30 />
    </div>
  );
}

function ItemsContainer1() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full" data-name="Items Container">
      <Card4 />
      <Card5 />
      <Card6 />
      <Card7 />
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute bottom-[2455px] content-stretch flex flex-col gap-[20px] items-start left-[50px] p-[20px] rounded-[24px] w-[1820px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#1f1f1f] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <SubContainer11 />
      <ItemsContainer1 />
    </div>
  );
}

function Icon21() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p3261280} fill="var(--fill-0, #E7BEB1)" fillRule="evenodd" id="Vector 431 (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Button25() {
  return (
    <div className="bg-[#1a1a1a] content-stretch flex items-start p-[20px] relative rounded-[100px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#262626] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <Icon21 />
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Container">
      <Button25 />
      <p className="font-['Roboto_Mono:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#b3b3b2] text-[20px] uppercase whitespace-nowrap">ALL Blogs</p>
    </div>
  );
}

function SubContainer16() {
  return (
    <div className="bg-[#1a1a1a] relative rounded-[16px] shrink-0 w-full" data-name="Sub Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[50px] relative w-full">
          <p className="flex-[1_0_0] font-['Roboto_Flex:SemiBold',sans-serif] font-semibold leading-[normal] min-h-px min-w-px not-italic relative text-[#f9efec] text-[48px] uppercase" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
            Related Blogs
          </p>
          <Container32 />
        </div>
      </div>
    </div>
  );
}

function TextContainer11() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start leading-[1.5] not-italic relative shrink-0 w-full" data-name="Text Container">
      <p className="font-['Roboto_Flex:Medium',sans-serif] font-medium relative shrink-0 text-[#f9efec] text-[24px] uppercase w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Optimizing Mobile User Experience for Higher Conversions
      </p>
      <p className="font-['Roboto_Flex:Regular',sans-serif] font-normal relative shrink-0 text-[#b3b3b2] text-[18px] w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Mobile devices dominate digital interactions, making mobile user experience crucial for conversion rates. Explore mobile design best practices...
      </p>
    </div>
  );
}

function Icon22() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p3261280} fill="var(--fill-0, #E7BEB1)" fillRule="evenodd" id="Vector 431 (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Button26() {
  return (
    <div className="bg-[#1f1f1f] content-stretch flex items-start p-[20px] relative rounded-[100px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#333] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <Icon22 />
    </div>
  );
}

function SubContainer17() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Sub Container">
      <Button26 />
      <p className="font-['Roboto_Mono:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#b3b3b2] text-[18px] uppercase whitespace-nowrap">Read Full Blog</p>
    </div>
  );
}

function Container33() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[40px] items-start px-[20px] relative w-full">
        <TextContainer11 />
        <SubContainer17 />
      </div>
    </div>
  );
}

function Card8() {
  return (
    <div className="bg-[#1a1a1a] flex-[1_0_0] min-h-px min-w-px relative rounded-[14px]" data-name="Card">
      <div className="content-stretch flex flex-col gap-[30px] items-start pb-[40px] pt-[20px] px-[20px] relative w-full">
        <div className="h-[329px] relative rounded-[14px] shrink-0 w-full" data-name="Image">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[14px] size-full" src={imgImage4} />
        </div>
        <Container33 />
      </div>
    </div>
  );
}

function TextContainer12() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start leading-[1.5] not-italic relative shrink-0 w-full" data-name="Text Container">
      <p className="font-['Roboto_Flex:Medium',sans-serif] font-medium relative shrink-0 text-[#f9efec] text-[24px] uppercase w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Mastering the Art of Minimalistic Design
      </p>
      <p className="font-['Roboto_Flex:Regular',sans-serif] font-normal relative shrink-0 text-[#b3b3b2] text-[18px] w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Simplicity and elegance take center stage in minimalistic design. Learn the principles of minimalism, how to effectively communicate with fewer elements...
      </p>
    </div>
  );
}

function Icon23() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p3261280} fill="var(--fill-0, #E7BEB1)" fillRule="evenodd" id="Vector 431 (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Button27() {
  return (
    <div className="bg-[#1f1f1f] content-stretch flex items-start p-[20px] relative rounded-[100px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#333] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <Icon23 />
    </div>
  );
}

function SubContainer18() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Sub Container">
      <Button27 />
      <p className="font-['Roboto_Mono:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#b3b3b2] text-[18px] uppercase whitespace-nowrap">Read Full Blog</p>
    </div>
  );
}

function Container34() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[40px] items-start px-[20px] relative w-full">
        <TextContainer12 />
        <SubContainer18 />
      </div>
    </div>
  );
}

function Card9() {
  return (
    <div className="bg-[#1a1a1a] flex-[1_0_0] min-h-px min-w-px relative rounded-[14px]" data-name="Card">
      <div className="content-stretch flex flex-col gap-[30px] items-start pb-[40px] pt-[20px] px-[20px] relative w-full">
        <div className="h-[329px] relative rounded-[14px] shrink-0 w-full" data-name="Image">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[14px] size-full" src={imgImage5} />
        </div>
        <Container34 />
      </div>
    </div>
  );
}

function TextContainer13() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start leading-[1.5] not-italic relative shrink-0 w-full" data-name="Text Container">
      <p className="font-['Roboto_Flex:Medium',sans-serif] font-medium relative shrink-0 text-[#f9efec] text-[24px] uppercase w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        The Psychology of Visual Design in Branding
      </p>
      <p className="font-['Roboto_Flex:Regular',sans-serif] font-normal relative shrink-0 text-[#b3b3b2] text-[18px] w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Uncover the impact of visual elements in branding and how they influence customer perceptions and emotions. Explore color psychology, typography choices...
      </p>
    </div>
  );
}

function Icon24() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p3261280} fill="var(--fill-0, #E7BEB1)" fillRule="evenodd" id="Vector 431 (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Button28() {
  return (
    <div className="bg-[#1f1f1f] content-stretch flex items-start p-[20px] relative rounded-[100px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#333] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <Icon24 />
    </div>
  );
}

function SubContainer19() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Sub Container">
      <Button28 />
      <p className="font-['Roboto_Mono:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#b3b3b2] text-[18px] uppercase whitespace-nowrap">Read Full Blog</p>
    </div>
  );
}

function Container35() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[40px] items-start px-[20px] relative w-full">
        <TextContainer13 />
        <SubContainer19 />
      </div>
    </div>
  );
}

function Card10() {
  return (
    <div className="bg-[#1a1a1a] flex-[1_0_0] min-h-px min-w-px relative rounded-[14px]" data-name="Card">
      <div className="content-stretch flex flex-col gap-[30px] items-start pb-[40px] pt-[20px] px-[20px] relative w-full">
        <div className="h-[329px] relative rounded-[14px] shrink-0 w-full" data-name="Image">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[14px] size-full" src={imgImage6} />
        </div>
        <Container35 />
      </div>
    </div>
  );
}

function ItemsContainer2() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full" data-name="Items Container">
      <Card8 />
      <Card9 />
      <Card10 />
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[20px] items-start left-[50px] p-[20px] rounded-[24px] top-[2893px] w-[1820px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#1f1f1f] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <SubContainer16 />
      <ItemsContainer2 />
    </div>
  );
}

function Icon25() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p2e1cc100} id="Vector" stroke="var(--stroke-0, #0F0F0F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Button29() {
  return (
    <div className="bg-[#ce7d63] content-stretch flex gap-[10px] items-start p-[14px] relative rounded-[100px] shrink-0" data-name="Button">
      <Icon25 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+0.5px)] size-[77px] top-[calc(50%-0.5px)]" data-name="Shape">
        <div className="absolute inset-[0_11.69%_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 68.0011 77">
            <path d={svgPaths.p3255d000} fill="var(--fill-0, #CE7D63)" id="Shape" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Roboto_Flex:Medium',sans-serif] font-medium leading-[1.5] left-[60px] not-italic text-[#ce7d63] text-[24px] top-[7px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Start a Project
      </p>
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex gap-[30px] items-center relative shrink-0 w-full" data-name="Container">
      <p className="font-['Roboto_Flex:SemiBold',sans-serif] font-semibold leading-[1.5] not-italic relative shrink-0 text-[#f9efec] text-[78px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Mastering the Art
      </p>
      <Button29 />
    </div>
  );
}

function TextContainer14() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Text Container">
      <p className="font-['Roboto_Flex:SemiBold',sans-serif] font-semibold leading-[1.5] not-italic relative shrink-0 text-[#f9efec] text-[78px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        of Minimalistic Design
      </p>
    </div>
  );
}

function SubContainer20() {
  return (
    <div className="bg-[#1a1a1a] flex-[1_0_0] min-h-px min-w-px relative rounded-[20px]" data-name="Sub Container">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-center justify-center px-[80px] py-[126px] relative w-full">
          <Container37 />
          <TextContainer14 />
        </div>
      </div>
    </div>
  );
}

function TextContainer15() {
  return (
    <div className="bg-[#1f1f1f] relative rounded-[14px] shrink-0 w-full" data-name="Text Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex font-['Roboto_Mono:Medium',sans-serif] font-medium gap-[20px] items-center leading-[1.5] p-[30px] relative uppercase w-full">
          <p className="flex-[1_0_0] min-h-px min-w-px relative text-[#b3b3b2] text-[18px]">Author</p>
          <p className="flex-[1_0_0] min-h-px min-w-px relative text-[22px] text-right text-white">Sophia Roberts</p>
        </div>
      </div>
    </div>
  );
}

function TextContainer16() {
  return (
    <div className="bg-[#1f1f1f] relative rounded-[14px] shrink-0 w-full" data-name="Text Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex font-['Roboto_Mono:Medium',sans-serif] font-medium gap-[20px] items-center leading-[1.5] p-[30px] relative w-full">
          <p className="flex-[1_0_0] min-h-px min-w-px relative text-[#b3b3b2] text-[18px]">Published Date</p>
          <p className="flex-[1_0_0] min-h-px min-w-px relative text-[22px] text-right text-white uppercase">25th October 2023</p>
        </div>
      </div>
    </div>
  );
}

function TextContainer17() {
  return (
    <div className="bg-[#1f1f1f] relative rounded-[14px] shrink-0 w-full" data-name="Text Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex font-['Roboto_Mono:Medium',sans-serif] font-medium gap-[20px] items-center leading-[1.5] p-[30px] relative w-full">
          <p className="flex-[1_0_0] min-h-px min-w-px relative text-[#b3b3b2] text-[18px]">Category</p>
          <p className="flex-[1_0_0] min-h-px min-w-px relative text-[22px] text-right text-white uppercase">Design</p>
        </div>
      </div>
    </div>
  );
}

function TextContainer18() {
  return (
    <div className="bg-[#1f1f1f] relative rounded-[14px] shrink-0 w-full" data-name="Text Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex font-['Roboto_Mono:Medium',sans-serif] font-medium gap-[20px] items-center leading-[1.5] p-[30px] relative w-full">
          <p className="flex-[1_0_0] min-h-px min-w-px relative text-[#b3b3b2] text-[18px]">Read Time</p>
          <p className="flex-[1_0_0] min-h-px min-w-px relative text-[22px] text-right text-white uppercase">5 minutes</p>
        </div>
      </div>
    </div>
  );
}

function SubContainer21() {
  return (
    <div className="bg-[#1a1a1a] content-stretch flex flex-col gap-[20px] items-center justify-center p-[30px] relative rounded-[14px] shrink-0 w-[593px]" data-name="Sub Container">
      <TextContainer15 />
      <TextContainer16 />
      <TextContainer17 />
      <TextContainer18 />
    </div>
  );
}

function Container36() {
  return (
    <div className="absolute content-stretch flex gap-[20px] items-start left-[50px] top-[191px] w-[1820px]" data-name="Container">
      <SubContainer20 />
      <SubContainer21 />
    </div>
  );
}

function Elements1() {
  return (
    <div className="absolute inset-[12.5%_4.51%]" data-name="ELEMENTS">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30.934 25.4998">
        <g id="ELEMENTS">
          <path d={svgPaths.p7f44580} fill="var(--fill-0, #CE7D63)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Capa1() {
  return (
    <div className="absolute contents inset-[12.5%_4.51%]" data-name="Capa 2">
      <Elements1 />
    </div>
  );
}

function Icon26() {
  return (
    <div className="relative shrink-0 size-[34px]" data-name="Icon">
      <Capa1 />
    </div>
  );
}

function Button30() {
  return (
    <div className="bg-[#1f1f1f] content-stretch flex items-start p-[16px] relative rounded-[12px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#333] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Icon26 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[8.82%]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Group 3">
          <g id="Logo 21">
            <path d={svgPaths.pc390800} fill="var(--fill-0, #CE7D63)" id="Vector" />
            <path d={svgPaths.p3d297900} fill="var(--fill-0, #1F1F1F)" id="Vector_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Icon27() {
  return (
    <div className="relative shrink-0 size-[34px]" data-name="Icon">
      <Group1 />
    </div>
  );
}

function Button31() {
  return (
    <div className="bg-[#1f1f1f] content-stretch flex items-start p-[16px] relative rounded-[12px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#333] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Icon27 />
    </div>
  );
}

function Elements2() {
  return (
    <div className="absolute inset-[8.82%_28.94%_8.82%_26.47%]" data-name="ELEMENTS">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.1599 28">
        <g id="ELEMENTS">
          <path d={svgPaths.p217cf980} fill="var(--fill-0, #CE7D63)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Capa2() {
  return (
    <div className="absolute contents inset-[8.82%_28.94%_8.82%_26.47%]" data-name="Capa 2">
      <Elements2 />
    </div>
  );
}

function Icon28() {
  return (
    <div className="relative shrink-0 size-[34px]" data-name="Icon">
      <Capa2 />
    </div>
  );
}

function Button32() {
  return (
    <div className="bg-[#1f1f1f] content-stretch flex items-start p-[16px] relative rounded-[12px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#333] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Icon28 />
    </div>
  );
}

function ButtonsContainer1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="Buttons Container">
      <Button30 />
      <Button31 />
      <Button32 />
    </div>
  );
}

function TextContainer19() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text Container">
      <div className="content-stretch flex items-start pl-[50px] relative w-full">
        <div className="flex-[1_0_0] font-['Roboto_Flex:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px not-italic relative text-[#b3b3b2] text-[18px] whitespace-pre-wrap" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
          <p className="mb-0">{`In the realm of design, the essence of minimalism lies in the deliberate choice to distill complexity and convey a powerful message through simplicity. It's an art form that celebrates the beauty of space, emphasizing the significance of each carefully chosen element. A minimalist design isn't about deprivation; rather, it's a conscious decision to focus on the core, allowing the audience to engage with a visual narrative that is both refined and impactful. `}</p>
          <p className="mb-0">{` `}</p>
          <p className="mb-0">{`As we explore the essence of minimalistic design, we uncover the subtle nuances that contribute to its allure. The use of negative space, a hallmark of minimalism, creates breathing room within the composition, allowing the viewer's gaze to rest and appreciate the inherent beauty of the design. The simplicity in form and color becomes a canvas for expression, where every line and shade tells a story. By embracing minimalism, designers have the opportunity to communicate more with less, fostering a connection that transcends visual aesthetics. `}</p>
          <p className="mb-0">{` `}</p>
          <p>At its core, minimalism in design challenges conventional notions, encouraging a shift from excess to essence. It invites both creators and consumers to engage in a thoughtful dialogue with the visual elements, promoting a sense of mindfulness and intentionality. The essence of minimalistic design, therefore, lies not just in its visual appeal but in the profound impact it has on the way we perceive and interact with the world of design.</p>
        </div>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Roboto_Flex:Medium',sans-serif] font-medium leading-[1.5] not-italic relative shrink-0 text-[#f9efec] text-[30px] uppercase w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        The Essence of Minimalism in Design
      </p>
      <TextContainer19 />
    </div>
  );
}

function TextContainer20() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text Container">
      <div className="content-stretch flex items-start pl-[50px] relative w-full">
        <div className="flex-[1_0_0] font-['Roboto_Flex:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px not-italic relative text-[#b3b3b2] text-[18px] whitespace-pre-wrap" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
          <p className="mb-0">{`Beyond its visually captivating exterior, minimalism is a design philosophy that permeates every aspect of the creative process, extending its influence far beyond the surface. This philosophy becomes a lens through which designers view their craft, shaping not just what is seen but how it is experienced. The minimalist approach transcends mere aesthetics; it becomes a mindset that emphasizes clarity, functionality, and a deeper connection with the audience. `}</p>
          <p className="mb-0">{` `}</p>
          <p>{`Minimalism, as a philosophy, challenges the notion that complexity is synonymous with sophistication. It prompts designers to question the necessity of each element, encouraging a meticulous evaluation of form and function. This shift in perspective extends to the user experience, where the removal of unnecessary clutter allows for a seamless and intuitive interaction. Beyond creating visually pleasing designs, the minimalist philosophy becomes a guiding force for designing experiences that are inherently user-centric. `}</p>
        </div>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Roboto_Flex:Medium',sans-serif] font-medium leading-[1.5] not-italic relative shrink-0 text-[#f9efec] text-[30px] uppercase w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Minimalism Beyond Aesthetics
      </p>
      <TextContainer20 />
    </div>
  );
}

function TextContainer21() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text Container">
      <div className="content-stretch flex items-start pl-[50px] relative w-full">
        <div className="flex-[1_0_0] font-['Roboto_Flex:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px not-italic relative text-[#b3b3b2] text-[18px] whitespace-pre-wrap" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
          <p className="mb-0">{`The journey to mastering minimalistic design involves a practical exploration of principles and techniques that breathe life into the philosophy. It begins with an understanding of the psychology of color in minimalism, where the strategic use of a limited color palette contributes to the overall impact of the design. The intentional choice of typography plays a pivotal role, guiding the viewer through the visual narrative with clarity and purpose. `}</p>
          <p className="mb-0">{` `}</p>
          <p className="mb-0">{`Navigating the terrain of minimalistic design also involves a keen awareness of the power of negative space. Far from being empty, this space becomes a deliberate pause, allowing the audience to absorb and appreciate the essential elements of the composition. Striking the right balance between simplicity and sophistication is an art in itself, requiring a discerning eye and a commitment to the core principles of minimalism. `}</p>
          <p className="mb-0">{` `}</p>
          <p>{`Practical tips extend beyond the theoretical, delving into the day-to-day decisions that shape a minimalist design. From the selection of imagery to the judicious use of graphic elements, each choice contributes to the overall impact. Mastery in minimalistic design is not merely about adherence to a set of rules; it's about developing an intuition that guides the creative process, ensuring that every design decision serves a purpose and contributes to the cohesive whole.`}</p>
        </div>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Roboto_Flex:Medium',sans-serif] font-medium leading-[1.5] not-italic relative shrink-0 text-[#f9efec] text-[30px] uppercase w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Practical Tips for Mastering Minimalistic Design
      </p>
      <TextContainer21 />
    </div>
  );
}

function SubContainer23() {
  return (
    <div className="bg-[#1a1a1a] flex-[1_0_0] min-h-px min-w-px relative rounded-[14px]" data-name="Sub Container">
      <div className="content-stretch flex flex-col gap-[30px] items-start p-[50px] relative w-full">
        <Container40 />
        <Container41 />
        <Container42 />
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="content-stretch flex gap-[20px] items-start pl-[152px] relative w-full">
        <ButtonsContainer1 />
        <SubContainer23 />
      </div>
    </div>
  );
}

function TextContainer22() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[1.5] min-h-px min-w-px not-italic relative" data-name="Text Container">
      <p className="font-['Roboto_Flex:Medium',sans-serif] font-medium relative shrink-0 text-[#f3dfd8] text-[20px] w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Wade Warren
      </p>
      <p className="font-['Roboto_Flex:Regular',sans-serif] font-normal relative shrink-0 text-[#81807e] text-[18px] w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Art Director
      </p>
    </div>
  );
}

function SubContainer25() {
  return (
    <div className="content-stretch flex gap-[15px] items-center relative shrink-0 w-full" data-name="Sub Container">
      <div className="relative rounded-[100px] shrink-0 size-[80px]" data-name="Image">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[100px]">
          <div className="absolute bg-[#ffb299] inset-0 rounded-[100px]" />
          <img alt="" className="absolute max-w-none object-cover rounded-[100px] size-full" src={imgImage8} />
        </div>
      </div>
      <TextContainer22 />
    </div>
  );
}

function Container44() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[20px] relative w-full">
        <SubContainer25 />
        <p className="font-['Roboto_Flex:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#b3b3b2] text-[18px] w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
          Crafting visual narratives that captivate and inspire, weaving creativity into every chapter of the design journey.
        </p>
      </div>
    </div>
  );
}

function Elements3() {
  return (
    <div className="absolute inset-[12.5%_4.51%]" data-name="ELEMENTS">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.8358 17.9998">
        <g id="ELEMENTS">
          <path d={svgPaths.p36d29f00} fill="var(--fill-0, #CE7D63)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Capa3() {
  return (
    <div className="absolute contents inset-[12.5%_4.51%]" data-name="Capa 2">
      <Elements3 />
    </div>
  );
}

function Icon29() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <Capa3 />
    </div>
  );
}

function Icon30() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p3261280} fill="var(--fill-0, #E7BEB1)" fillRule="evenodd" id="Vector 431 (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Button33() {
  return (
    <div className="bg-[#1f1f1f] relative rounded-[14px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center px-[24px] py-[18px] relative w-full">
          <Icon29 />
          <p className="flex-[1_0_0] font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px relative text-[#ccc] text-[20px]">@wadewarren</p>
          <Icon30 />
        </div>
      </div>
    </div>
  );
}

function SubContainer24() {
  return (
    <div className="bg-[#1a1a1a] relative rounded-[14px] shrink-0 w-full" data-name="Sub Container">
      <div className="content-stretch flex flex-col gap-[20px] items-start p-[20px] relative w-full">
        <Container44 />
        <Button33 />
      </div>
    </div>
  );
}

function Icon31() {
  return (
    <div className="relative shrink-0 size-[34px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 34">
        <g id="Icon">
          <path d={svgPaths.p296ada00} fill="var(--fill-0, #ED142E)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button34() {
  return (
    <div className="bg-[#1f1f1f] content-stretch flex items-start p-[16px] relative rounded-[12px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#333] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Icon31 />
    </div>
  );
}

function TextContainer23() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[10px] items-end justify-end min-h-px min-w-px relative" data-name="Text Container">
      <p className="font-['Roboto_Mono:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[18px] text-right text-white uppercase whitespace-nowrap">2.6k</p>
      <div className="flex flex-row items-end self-stretch">
        <div className="flex h-0 items-center justify-center relative self-center shrink-0 w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "22" } as React.CSSProperties}>
          <div className="flex-none h-full rotate-90">
            <div className="h-full relative w-[27px]" data-name="Line">
              <div className="absolute inset-[-2px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 2">
                  <line id="Line" stroke="var(--stroke-0, #404040)" strokeWidth="2" x2="27" y1="1" y2="1" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="font-['Roboto_Flex:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#81807e] text-[16px] text-right uppercase whitespace-nowrap" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Users
      </p>
    </div>
  );
}

function SubContainer27() {
  return (
    <div className="bg-[#1f1f1f] flex-[1_0_0] min-h-px min-w-px relative rounded-[14px]" data-name="Sub Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center p-[20px] relative w-full">
          <p className="font-['Roboto_Mono:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#b3b3b2] text-[18px] uppercase whitespace-nowrap">Liked By</p>
          <TextContainer23 />
        </div>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Button34 />
      <SubContainer27 />
    </div>
  );
}

function Icon32() {
  return (
    <div className="relative shrink-0 size-[34px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 34">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p1df18180} fill="var(--fill-0, #DA9E8B)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button35() {
  return (
    <div className="bg-[#1f1f1f] content-stretch flex items-start p-[16px] relative rounded-[12px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#333] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Icon32 />
    </div>
  );
}

function TextContainer24() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[10px] items-end justify-end min-h-px min-w-px relative" data-name="Text Container">
      <p className="font-['Roboto_Mono:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[18px] text-right text-white uppercase whitespace-nowrap">120</p>
      <div className="flex flex-row items-end self-stretch">
        <div className="flex h-0 items-center justify-center relative self-center shrink-0 w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "22" } as React.CSSProperties}>
          <div className="flex-none h-full rotate-90">
            <div className="h-full relative w-[27px]" data-name="Line">
              <div className="absolute inset-[-2px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 2">
                  <line id="Line" stroke="var(--stroke-0, #404040)" strokeWidth="2" x2="27" y1="1" y2="1" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="font-['Roboto_Flex:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#81807e] text-[16px] text-right uppercase whitespace-nowrap" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Users
      </p>
    </div>
  );
}

function SubContainer28() {
  return (
    <div className="bg-[#1f1f1f] flex-[1_0_0] min-h-px min-w-px relative rounded-[14px]" data-name="Sub Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center p-[20px] relative w-full">
          <p className="font-['Roboto_Mono:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#b3b3b2] text-[18px] uppercase whitespace-nowrap">Shared BY</p>
          <TextContainer24 />
        </div>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Button35 />
      <SubContainer28 />
    </div>
  );
}

function SubContainer26() {
  return (
    <div className="bg-[#1a1a1a] relative rounded-[14px] shrink-0 w-full" data-name="Sub Container">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-center justify-center p-[20px] relative w-full">
          <Container45 />
          <Container46 />
        </div>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-[441px]" data-name="Container">
      <SubContainer24 />
      <SubContainer26 />
    </div>
  );
}

function SubContainer22() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full" data-name="Sub Container">
      <Container39 />
      <Container43 />
    </div>
  );
}

function Container38() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[50px] items-start left-[50px] top-[733px] w-[1821px]" data-name="Container">
      <div className="h-[600px] relative rounded-[14px] shrink-0 w-full" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[14px] size-full" src={imgImage7} />
      </div>
      <SubContainer22 />
    </div>
  );
}

export default function BlogsOpenPageDesktop() {
  return (
    <div className="bg-[#0f0f0f] relative size-full" data-name="Blogs Open Page - Desktop">
      <Navbar />
      <Container />
      <Container5 />
      <Container21 />
      <Container31 />
      <Container36 />
      <Container38 />
    </div>
  );
}