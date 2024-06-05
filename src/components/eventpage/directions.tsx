import { Tabs, TabsContent, TabsList, TabsTrigger } from  "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import confetti from 'canvas-confetti';

export default function DirectionList() {
    const directions = [
        {
            title: "Day 1",
            methods: [
                {
                    title: "Bencoolen MRT",
                    direction: [
                        {
                            method: "Exit via Exit C",
                            img: "/events/june/directions/Bencoolen_Exit C(Coming Out).webp"
                        },
                        {
                            method: "Turn left and walk along this walkway",
                            img: "/events/june/directions/Bencoolen_Exit C.webp"
                        },
                        {
                            method: "Continue along this walkway",
                            img: "/events/june/directions/Walkway From Bras Basah Exit C _ Bencoolen Exit C.webp"
                        },
                        {
                            method: "Turn right and go up the escalator",
                            img: "/events/june/directions/End of Walkway 1.webp"
                        },
                        {
                            method: "Walk along this walkway",
                            img: "/events/june/directions/Start of Walkway 2.webp"
                        },
                        {
                            method: "Continue along this walkway",
                            img: "/events/june/directions/Walkway 2 Continued.webp"
                        },
                        {
                            method: "Turn right at the dead end and exit",
                            img: "/events/june/directions/End of walkway 2_ Before Escalator to NAKA.webp"
                        },
                        {
                            method: "Go up the escalator and turn right",
                            img: "/events/june/directions/Escalator to NAKA.webp"
                        },
                        {
                            method: "Enter and go to Level 2",
                            img: "/events/june/directions/SOA_Security.webp"
                        }
                    ]
                },
                {
                    title: "Bras Basah MRT",
                    direction: [
                        {
                            method: "Exit via Exit B and turn right",
                            img: "/events/june/directions/Bras Basah_Exit B.webp"
                        },
                        {
                            method: "Turn left and go up the escalator",
                            img: "/events/june/directions/End of Walkway 1.webp"
                        },
                        {
                            method: "Walk along this walkway",
                            img: "/events/june/directions/Start of Walkway 2.webp"
                        },
                        {
                            method: "Continue along this walkway",
                            img: "/events/june/directions/Walkway 2 Continued.webp"
                        },
                        {
                            method: "Turn right at the dead end and exit",
                            img: "/events/june/directions/End of walkway 2_ Before Escalator to NAKA.webp"
                        },
                        {
                            method: "Go up the escalator and turn right",
                            img: "/events/june/directions/Escalator to NAKA.webp"
                        },
                        {
                            method: "Enter and go to Level 2",
                            img: "/events/june/directions/SOA_Security.webp"
                        }
                    ]
                },
                {
                    title: "Bus",
                    direction: [
                        {
                            method: "Take a bus to the SMU (4) bus stop (04121)",
                            img: "/events/june/directions/04121 Busstop.webp"
                        },
                        {
                            method: "Go straight and turn left",
                            img: "/events/june/directions/To NAKA from Bus Stop_ Lib pick up.webp"
                        },
                        {
                            method: "Enter and go to Level 2",
                            img: "/events/june/directions/SOA_Security.webp"
                        }
                    ]
                },
                {
                    title: "Drop-off by Car",
                    direction: [
                        {
                            method: "Drop off here at Li Ka Shing Library",
                            img: "/events/june/directions/Library_Pick Up.webp"
                        },
                        {
                            method: "Walk straight along the walkway",
                            img: "/events/june/directions/Library pickup to NAKA_1.webp"
                        },
                        {
                            method: "Turn left and go to the crossing and cross the road",
                            img: "/events/june/directions/Library pickup to NAKA_2.webp"
                        },
                        {
                            method: "After crossing, enter from from the bus stop and turn left",
                            img: "/events/june/directions/To NAKA from Bus Stop_ Lib pick up.webp"
                        },
                        {
                            method: "Enter and go to Level 2",
                            img: "/events/june/directions/SOA_Security.webp"
                        }
                    ]
                }
            ]
        }
    ]
    const days = directions.map(day => <TabsTrigger className="w-full" value={day.title}>{day.title}</TabsTrigger>);
    const methods = directions.map(methods => (
        <TabsContent value={methods.title}>
            <Tabs>
                <TabsList className="flex-wrap gap-y-1 w-full">
                    {methods.methods.map(method => <TabsTrigger className="flex-1" value={method.title}>{method.title}</TabsTrigger>)}
                </TabsList>
                {methods.methods.map((method) => <TabsContent value={method.title}>
                    {method.direction?.map((direction, index) => (
                        <div>
                            <img src={direction.img} alt="" className="rounded-xl ring ring-1 ring-slate-800 mt-6" />
                            <div className="flex gap-x-2 mt-3 justify-center items-center">
                                <h2 className="text-base">{index + 1}.</h2>
                                <p>{direction.method}</p>
                            </div>
                        </div>
                    ))}
                    <div className="bg-slate-900 mt-7 mb-10 p-5 rounded-xl flex flex-col items-center">
                    <h2 className="text-lg mb-4">You've reached!</h2>
                    <Button
                        onClick={() =>
                        confetti({
                            angle: randomInRange(55, 125),
                            spread: randomInRange(50, 70),
                            particleCount: randomInRange(50, 100),
                            origin: { y: 0.6 },
                        })
                        }
                        className="inline-flex items-center justify-center"
                    >
                        click me :)
                    </Button>
                    </div>
                </TabsContent>)}
            </Tabs>
        </TabsContent>
    ));
    return (
        <Tabs className="my-5">
            <TabsList className="w-full">
                {days}
            </TabsList>
            {methods}
        </Tabs>
    )
};

function randomInRange(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }