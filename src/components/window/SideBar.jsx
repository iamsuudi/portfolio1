import { DropdownMenu } from "@radix-ui/themes";
import UbuntuWhiteIcon from "../../assets/UbuntuWhiteIcon";

export default function SideBar() {
    return (
        <div className="w-full mt-auto">
            <div className="w-full backdrop-blur-md bg-black/40 max-w-96">
                <DropdownMenu.Root>
                    <DropdownMenu.Trigger>
                        <button className="flex">
                            <UbuntuWhiteIcon />
                        </button>
                    </DropdownMenu.Trigger>
                    <DropdownMenu.Content color="gray">
                        <DropdownMenu.Item shortcut="⌘ E">
                            Edit
                        </DropdownMenu.Item>
                        <DropdownMenu.Item shortcut="⌘ D">
                            Duplicate
                        </DropdownMenu.Item>
                        <DropdownMenu.Separator />
                        <DropdownMenu.Item shortcut="⌘ N">
                            Archive
                        </DropdownMenu.Item>
                    </DropdownMenu.Content>
                </DropdownMenu.Root>

                <button>poll</button>
            </div>
        </div>
    );
}
