"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Bebas_Neue } from "next/font/google";

const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"] });

const IMG_W = 5080;
const IMG_H = 2910;

type Member = {
  id: number;
  name: string;
  role: string;
  points: number[][];
};

const members: Member[] = [
  { id: 1, name: "Mati", role: "Gitara", points: [[564, 501, 490, 579, 432, 776, 408, 946, 463, 965, 415, 1040, 313, 1131, 291, 1203, 290, 1574, 268, 1668, 291, 1732, 323, 1750, 397, 2027, 451, 2092, 506, 2249, 531, 2410, 572, 2518, 560, 2560, 587, 2614, 631, 2906, 960, 2909, 945, 2499, 1089, 2377, 1206, 2207, 1179, 2019, 1117, 1814, 1138, 1788, 1105, 1721, 1191, 1572, 1205, 1453, 1076, 1127, 994, 1003, 777, 890, 800, 746, 718, 552, 645, 499]] },
  { id: 2, name: "Karol", role: "Perkusja", points: [[1768, 667, 1705, 671, 1613, 731, 1583, 820, 1553, 846, 1544, 910, 1571, 935, 1565, 972, 1604, 1041, 1640, 1054, 1643, 1081, 1524, 1127, 1455, 1179, 1403, 1312, 1386, 1455, 1399, 1750, 1435, 1762, 1480, 1862, 1467, 1914, 1485, 2007, 1464, 2060, 1488, 2153, 1469, 2313, 1512, 2427, 1558, 2708, 1554, 2903, 1959, 2900, 1968, 2215, 2045, 2204, 2081, 2139, 2093, 1894, 2120, 1811, 2141, 1420, 2113, 1194, 1901, 1065, 1914, 1015, 1958, 964, 1974, 896, 1963, 834, 1863, 699], [1691, 2267, 1698, 2271, 1740, 2346, 1740, 2468, 1739, 2471, 1734, 2474, 1715, 2459, 1678, 2410, 1678, 2397, 1680, 2392, 1681, 2380, 1684, 2376, 1693, 2370, 1695, 2365, 1691, 2336, 1691, 2327, 1694, 2315, 1687, 2296, 1686, 2270]] },
  { id: 3, name: "Krzysiek", role: "Wokal", points: [[2552, 380, 2486, 412, 2427, 503, 2388, 629, 2401, 726, 2434, 769, 2478, 772, 2374, 856, 2216, 918, 2166, 997, 2141, 1219, 2161, 1633, 2178, 1672, 2202, 1669, 2227, 1761, 2216, 1897, 2274, 2337, 2335, 2504, 2464, 2666, 2435, 2909, 2885, 2909, 2875, 2829, 2786, 2705, 2783, 2233, 2825, 1726, 2799, 1660, 2821, 1630, 2807, 1507, 2891, 1463, 2894, 1355, 2932, 1259, 2930, 1055, 2897, 972, 2759, 895, 2659, 804, 2659, 757, 2758, 707, 2788, 622, 2782, 520, 2743, 438, 2671, 396]] },
  { id: 4, name: "Krystian", role: "Gitara", points: [[3339, 417, 3303, 424, 3174, 513, 3018, 596, 2946, 656, 2925, 696, 2895, 718, 2919, 803, 2914, 835, 2931, 861, 2947, 930, 3030, 1057, 3072, 1210, 3080, 1318, 3045, 1566, 3020, 1625, 3000, 1862, 3053, 2182, 3094, 2334, 3089, 2411, 3114, 2739, 3114, 2909, 3354, 2907, 3295, 2374, 3308, 2125, 3340, 2055, 3380, 2121, 3363, 2260, 3384, 2582, 3396, 2625, 3427, 2669, 3462, 2684, 3498, 2680, 3530, 2642, 3575, 2464, 3654, 2243, 3663, 1829, 3675, 1789, 3737, 1700, 3782, 1582, 3798, 1498, 3822, 1498, 3831, 1478, 3813, 1450, 3818, 1414, 3799, 1224, 3811, 1196, 3789, 1069, 3760, 1017, 3694, 940, 3565, 880, 3529, 763, 3528, 715, 3509, 634, 3468, 513, 3413, 441]] },
  { id: 5, name: "Kuba", role: "Bas", points: [[4301, 695, 4258, 710, 4206, 748, 4106, 879, 4087, 889, 4101, 919, 4084, 938, 4095, 1117, 4120, 1138, 3960, 1213, 3915, 1255, 3862, 1343, 3821, 1436, 3833, 1469, 3830, 1491, 3812, 1502, 3791, 1566, 3789, 1616, 3808, 1661, 3811, 1775, 3849, 1968, 3883, 2059, 3877, 2075, 3901, 2085, 3897, 2104, 3910, 2138, 3914, 2242, 3960, 2469, 3982, 2537, 3975, 2599, 3982, 2654, 4000, 2666, 3998, 2681, 4013, 2710, 4007, 2747, 4021, 2779, 4013, 2817, 4038, 2909, 4506, 2907, 4510, 2661, 4576, 2443, 4594, 2097, 4643, 2002, 4720, 1923, 4799, 1786, 4801, 1692, 4834, 1673, 4764, 1482, 4738, 1383, 4690, 1282, 4618, 1210, 4459, 1141, 4438, 1113, 4446, 1104, 4477, 1101, 4532, 1114, 4539, 1090, 4520, 996, 4502, 963, 4519, 949, 4520, 915, 4492, 909, 4499, 895, 4467, 860, 4488, 848, 4485, 838, 4451, 817, 4464, 806, 4466, 789, 4369, 741, 4339, 703]] },
];

function ringsToPath(rings: number[][]): string {
  return rings
    .map((r) => {
      let d = `M${r[0]} ${r[1]}`;
      for (let i = 2; i < r.length; i += 2) d += ` L${r[i]} ${r[i + 1]}`;
      return d + " Z";
    })
    .join(" ");
}

function toInverseClipPath(rings: number[][]): string {
  return `M0 0 H${IMG_W} V${IMG_H} H0 Z ${ringsToPath(rings)}`;
}

function tipAnchor(rings: number[][]): { left: number; top: number } {
  const outer = rings[0];
  let sumX = 0;
  let minY = Infinity;
  const n = outer.length / 2;
  for (let i = 0; i < outer.length; i += 2) {
    sumX += outer[i];
    if (outer[i + 1] < minY) minY = outer[i + 1];
  }
  return { left: (sumX / n / IMG_W) * 100, top: (minY / IMG_H) * 100 };
}

function memberHref(name: string): string {
  return `/sklad/${name.toLowerCase()}`;
}

export default function Band() {
  const router = useRouter();
  const [activeId, setActiveId] = useState<number | null>(null);
  const [canHover] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(hover: hover)").matches,
  );
  const active = members.find((m) => m.id === activeId) ?? null;

  function handleClick(member: Member) {
    // Desktop (hover): the spotlight is already shown on hover, so a click
    // navigates straight away. Touch: first tap activates the spotlight,
    // a second tap on the same member navigates.
    if (canHover || activeId === member.id) {
      router.push(memberHref(member.name));
    } else {
      setActiveId(member.id);
    }
  }

  return (
    <section id="band" className="bg-black px-4 py-16 text-white">
      <div className="mx-auto max-w-7xl">
        <h2
          className={`mb-10 text-5xl uppercase tracking-wider md:text-7xl ${bebas.className}`}
        >
          Skład
        </h2>

        <div className="rounded-[1.6rem] bg-[#F2E6C9] p-2 shadow-[0_0_70px_-15px_rgba(206,34,62,0.5)] md:p-2.5">
          <div className="rounded-[1.4rem] bg-[#CE223E] p-2 md:p-3">
            <div className="rounded-[1.15rem] bg-[#F8841F] p-2 md:p-3">
              <div className="rounded-[0.95rem] bg-[#E0A526] p-2 md:p-3">
                <div className="rounded-[0.8rem] bg-[#2E1A12] p-1.5 md:p-2">
                  <div className="relative w-full overflow-visible">
              <Image
              src="/banner_wall.JPG"
              alt="Skład zespołu Moonshine"
              width={IMG_W}
              height={IMG_H}
              className="block h-auto w-full select-none rounded-xl"
            />

            <svg
              viewBox={`0 0 ${IMG_W} ${IMG_H}`}
              className="absolute inset-0 h-full w-full rounded-xl"
              aria-hidden="true"
            >
            <defs>
              <filter id="bw" colorInterpolationFilters="sRGB">
                <feColorMatrix type="saturate" values="0" />
              </filter>

              {members.map(({ id, points }) => (
                <clipPath key={id} id={`bw-clip-${id}`}>
                  <path d={toInverseClipPath(points)} clipRule="evenodd" />
                </clipPath>
              ))}
            </defs>

            {activeId !== null && (
              <image
                href="/banner_wall.JPG"
                x={0}
                y={0}
                width={IMG_W}
                height={IMG_H}
                preserveAspectRatio="xMidYMid meet"
                clipPath={`url(#bw-clip-${activeId})`}
                filter="url(#bw)"
              />
            )}

            {members.map((member) => (
              <path
                key={member.id}
                d={ringsToPath(member.points)}
                fillRule="evenodd"
                fill="transparent"
                className="cursor-pointer"
                onMouseEnter={canHover ? () => setActiveId(member.id) : undefined}
                onMouseLeave={canHover ? () => setActiveId(null) : undefined}
                onClick={() => handleClick(member)}
              />
            ))}
          </svg>

          {active &&
            (() => {
              const tip = tipAnchor(active.points);
              return (
                <div
                  className={`pointer-events-none absolute z-20 -translate-x-1/2 -translate-y-full ${bebas.className}`}
                  style={{ left: `${tip.left}%`, top: `${tip.top}%` }}
                >
                  <div className="border border-white/20 bg-black/80 px-4 py-2 backdrop-blur-sm">
                    <p className="text-2xl uppercase tracking-wider text-white">
                      {active.name}
                    </p>
                    <p className="text-xl uppercase tracking-widest text-gray-400">
                      {active.role}
                    </p>
                  </div>
                  <div className="mx-auto h-5 w-px bg-white/40" />
                </div>
              );
            })()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
