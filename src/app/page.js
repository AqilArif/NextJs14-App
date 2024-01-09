import AutoCompleteUI from "@/components/common/AutoCompleteUI";
import ButtonUI from "@/components/common/ButtonUI";
import EmptyData from "@/components/common/EmptyData";
import InputUI from "@/components/common/InputUI";
import PaginationUI from "@/components/common/PaginationUI";
import SelectUI from "@/components/common/SelectUI";
import { Button } from "@nextui-org/react";

export default function Home() {
  return (
    <>
      <h1 className='text-center font-bold'>Hello World</h1>
      
      {/* Testing Components */}
      <div className="m-4">
        <AutoCompleteUI />
        <ButtonUI className='mt-6'>Button</ButtonUI>
        <EmptyData />
        <InputUI />
        <PaginationUI total={10} className="w-1/2" />
        <SelectUI />
      </div>
    </>
  )
}
