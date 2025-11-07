"use client";

import { cn } from "@/utils/cn";
import { createListCollection, Portal, Select } from "@ark-ui/react";
import { ChevronDownIcon } from "lucide-react";

interface Item {
  label: string;
  value: string;
  disabled?: boolean | undefined;
}

export function LanguageSelectorClient() {
  const collection = createListCollection<Item>({
    items: [
      { label: "Русский", value: "ru" },
      { label: "Українська (скоро буде)", value: "ua", disabled: true },
      { label: "English (will be soon)", value: "en", disabled: true },
    ],
  });

  return (
    <Select.Root collection={collection} value={["ru"]}>
      {/* <Select.Label>Язык</Select.Label> */}
      <Select.Control>
        <Select.Trigger className="flex items-center gap-2">
          <Select.ValueText />
          <Select.Indicator>
            <ChevronDownIcon />
          </Select.Indicator>
        </Select.Trigger>
      </Select.Control>
      <Portal>
        <Select.Positioner>
          <Select.Content className="rounded-sm bg-gray-200">
            <Select.ItemGroup>
              {collection.items.map((item) => (
                <Select.Item
                  key={item.value}
                  item={item}
                  className={cn("px-2 py-1 flex items-center gap-2", {
                    "hover:bg-gray-300 cursor-pointer": !item.disabled,
                    "text-gray-500": item.disabled,
                  })}
                >
                  <Select.ItemText>{item.label}</Select.ItemText>
                  <Select.ItemIndicator>✓</Select.ItemIndicator>
                </Select.Item>
              ))}
            </Select.ItemGroup>
          </Select.Content>
        </Select.Positioner>
      </Portal>
      <Select.HiddenSelect />
    </Select.Root>
  );
}
