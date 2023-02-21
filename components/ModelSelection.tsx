"use client";
import React from "react";
import useSWR from "swr";
import Select from "react-select";
import { ActionMeta, Options } from "react-select/dist/declarations/src";

const fetchModels = () => fetch("/api/getEngines").then((res) => res.json());
interface OptionType {
  label: string;
  value: string;
}
const ModelSelection = () => {
  const { data: models, isLoading } = useSWR("models", fetchModels);
  const { data: model, mutate: setModal } = useSWR("model", {
    fallbackData: "text-davinci-003",
  });

  const handleSelectChange = (option: OptionType | null) => {
    setModal(option?.value);
  };

  return (
    <div className="mt-2">
      <Select
        className="mt-2"
        options={models?.modelOptions}
        defaultInputValue={model}
        placeholder={model}
        isSearchable
        isLoading={isLoading}
        menuPosition="fixed"
        classNames={{
          control: (state) => "bg-[#434654] border-[#434654]",
        }}
        onChange={handleSelectChange}
        // onChange={(e: props) => setModal(e.value)}
      />
    </div>
  );
};

export default ModelSelection;
