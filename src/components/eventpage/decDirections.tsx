import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import confetti from "canvas-confetti";

export default function DirectionList() {
    // in public folder
    const methods = {
        toSMUbyCityHallDhobyGhaut: {
            title: "From City Hall, Dhoby Ghaut",
            directions: [
                {
                    method: "Navigate to the School of Computing and Information Systems above ground and head to the glass enclosure with an escalator.",
                    img: "/events/december/directions/CityHallDhobyGhaut1.png",
                },
                {
                    method: "Go down the escalator, and turn left.",
                    img: "/events/december/directions/CityHallDhobyGhaut2.png",
                },
                {
                    method: "Follow the corridor and turn left.",
                    img: "/events/december/directions/CityHallDhobyGhaut3.png",
                },
                {
                    method: "Walk straight ahead, until you see the seminar rooms on your right.",
                    img: "/events/december/directions/CityHallDhobyGhaut4.png",
                },
                {
                    method: "You've arrived!",
                    img: "/events/december/directions/CityHallDhobyGhaut5.png",
                },
            ],
        },
        toSMUbyBencoolen: {
            title: "Bencoolen MRT",
            directions: [
                {
                    method: "Exit via Exit C and turn right, walking straight ahead.",
                    img: "/events/december/directions/Bencoolen1.png",
                },
                {
                    method: "Turn to your right into the hallway as indicated by the arrow.",
                    img: "/events/december/directions/Bencoolen2.png",
                },
                {
                    method: "Walk straight, where the nearest toilet from the conference room can be located. Turn left again down a smaller corridor.",
                    img: "/events/december/directions/Bencoolen3.png",
                },
                {
                    method: "Walk straight ahead until you see the seminar rooms to your left.",
                    img: "/events/december/directions/Bencoolen4.png",
                },
                {
                    method: "You've arrived!",
                    img: "/events/december/directions/Bencoolen5.png",
                },
            ],
        },
        toSMUbyBrasBasah: {
            title: "Bras Basah MRT",
            directions: [
                {
                    method: "Exit via Exit C, turn right and walk straight ahead.",
                    img: "/events/december/directions/BrasBasah1.png",
                },
                {
                    method: "Follow the corridor, turning right.",
                    img: "/events/december/directions/BrasBasah2.png",
                },
                {
                    method: "Walk past the Starbucks, and keep navigating ahead.",
                    img: "/events/december/directions/BrasBasah3.png",
                },
                {
                    method: "Walk straight down along the corridor, passing by Bencoolen MRT.",
                    img: "/events/december/directions/BrasBasah4.png",
                },
                {
                    method: "Turn to your right into the hallway as indicated by the arrow.",
                    img: "/events/december/directions/BrasBasah5.png",
                },
                {
                    method: "Walk straight, where the nearest toilet from the conference room can be located. Turn left again down a smaller corridor.",
                    img: "/events/december/directions/BrasBasah6.png",
                },
                {
                    method: "Walk straight ahead until you see the seminar rooms to your left.",
                    img: "/events/december/directions/BrasBasah7.png",
                },
                {
                    method: "You've arrived!",
                    img: "/events/december/directions/BrasBasah8.png",
                },
            ],
        },
        toSMUbyCar: {
            title: "Drop-off by Car",
            directions: [
                {
                    method: "Drop off at School of Computing and Information Systems 2 pick-up point. Head towards the basement via the escalator.",
                    img: "/events/december/directions/dropoff1.png",
                },
                {
                    method: "Go through the door on your right.",
                    img: "/events/december/directions/dropoff2.png",
                },
                {
                    method: "Once you are out of the door, turn left and head straight towards the seminar rooms, which will be on your left.",
                    img: "/events/december/directions/dropoff3.png",
                },
                {
                    method: "You've arrived!",
                    img: "/events/december/directions/dropoff4.png",
                },
            ],
        },
    };
    const directions = [
        {
            title: "All Days",
            tracks: [
                {
                    "All Tracks": [
                        methods.toSMUbyCityHallDhobyGhaut,
                        methods.toSMUbyBencoolen,
                        methods.toSMUbyBrasBasah,
                        methods.toSMUbyCar,
                    ],
                },
            ],
        },
    ];

    return (
        <Tabs className="my-5">
            <TabsList className="w-full">
                {/* 'b' should be a day */}
                {directions.map((b) => (
                    <TabsTrigger
                        key={b.title}
                        className="w-full"
                        value={b.title}
                    >
                        {b.title}
                    </TabsTrigger>
                ))}
            </TabsList>
            {/* 'c' should be a day */}
            {directions.map((c) => (
                <TabsContent key={c.title} value={c.title}>
                    <Tabs>
                        <TabsList className="w-full">
                            {/* 'd' n 'e' should be a track */}
                            {c.tracks.map((d) => (
                                <TabsTrigger
                                    className="w-full"
                                    key={Object.keys(d)[0]}
                                    value={Object.keys(d)[0]}
                                >
                                    {Object.keys(d)[0]}
                                </TabsTrigger>
                            ))}
                        </TabsList>
                        {c.tracks.map((e) => (
                            <TabsContent
                                key={Object.keys(e)[0]}
                                value={Object.keys(e)[0]}
                            >
                                <Tabs>
                                    <TabsList className="w-full flex-wrap gap-y-1">
                                        {Object.values(e)[0].map(
                                            (f: { title: string }) => (
                                                <TabsTrigger
                                                    value={f.title}
                                                    key={f.title}
                                                    className="flex-1"
                                                >
                                                    {f.title}
                                                </TabsTrigger>
                                            )
                                        )}
                                    </TabsList>
                                    {Object.values(e)[0].map(
                                        (f: {
                                            title: string;
                                            directions: any[];
                                        }) => (
                                            <TabsContent
                                                value={f.title}
                                                key={f.title}
                                            >
                                                {f.directions.map(
                                                    (g, index) => (
                                                        <div key={g.method}>
                                                            <img
                                                                src={g.img}
                                                                alt={g.method}
                                                                className="rounded-xl ring ring-1 ring-slate-800 mt-6"
                                                            />
                                                            <p className="text-center mt-3 mx-10">
                                                                <span className="font-semibold">
                                                                    {index + 1}.
                                                                </span>{" "}
                                                                {g.method}
                                                            </p>
                                                        </div>
                                                    )
                                                )}
                                                <div className="bg-slate-900 mt-7 mb-10 p-5 rounded-xl flex flex-col items-center">
                                                    <h2 className="text-lg mb-4">
                                                        You've reached!
                                                    </h2>
                                                    <Button
                                                        onClick={() =>
                                                            confetti({
                                                                angle: randomInRange(
                                                                    55,
                                                                    125
                                                                ),
                                                                spread: randomInRange(
                                                                    50,
                                                                    70
                                                                ),
                                                                particleCount:
                                                                    randomInRange(
                                                                        50,
                                                                        100
                                                                    ),
                                                                origin: {
                                                                    y: 0.6,
                                                                },
                                                            })
                                                        }
                                                        className="inline-flex items-center justify-center"
                                                    >
                                                        click me :)
                                                    </Button>
                                                </div>
                                            </TabsContent>
                                        )
                                    )}
                                </Tabs>
                            </TabsContent>
                        ))}
                    </Tabs>
                </TabsContent>
            ))}
        </Tabs>
    );
}

function randomInRange(min: number, max: number) {
    return Math.random() * (max - min) + min;
}
