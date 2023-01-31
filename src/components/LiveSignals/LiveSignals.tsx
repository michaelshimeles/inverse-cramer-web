import { Heading, HStack, VStack } from "@chakra-ui/react";
import LiveSignalsCard from "../LiveSignalsCard/LiveSignalsCard";

function LiveSignals() {
  // const { data } = useTweetStream();
  // console.log(data?.data?.data);

  return (
    <VStack gap="1rem" pb="2rem">
      <HStack>
        <Heading>Live Signals</Heading>
      </HStack>
      {/* {data?.data?.data.map((data: any) => {
        <LiveSignalsCard />;
      })} */}
      <LiveSignalsCard />;
    </VStack>
  );
}

export default LiveSignals;
