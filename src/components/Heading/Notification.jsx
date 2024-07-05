import { Avatar, Box, Card, Text, Flex } from "@radix-ui/themes";
import { Cross2Icon } from "@radix-ui/react-icons";

function Notification({ notification, remover }) {
	return (
		<Card
			className="my-2 drop-shadow-sm outline-transparent hover:cursor-pointer hover:bg-white/5"
			size={"1"}
		>
			<Flex gap="3" align="center">
				<Avatar
					size="2"
					src={notification.avatar}
					// radius="full"
					fallback="T"
				/>
				<Box>
					<Text as="div" size="1" weight="bold">
						{notification.header}
					</Text>
					<Text as="div" size="1" color="gray">
						{notification.message}
					</Text>
				</Box>
				<button
					className="p-1 ml-auto rounded-full hover:bg-white/5 backdrop-blur-md"
					onClick={() => {
						remover(notification.id);
					}}
				>
					<Cross2Icon />
				</button>
			</Flex>
		</Card>
	);
}

export default Notification;
