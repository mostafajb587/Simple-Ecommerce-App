import StatCard from "./StatCard";
import { FaUser, FaUsers, FaBriefcase, FaCheckCircle } from "react-icons/fa";

const stats = [
  {
    label: "Hard Workers",
    count: 1959,
    icon: <FaUser />,
    gradient: "from-blue-400 to-indigo-600",
  },
  {
    label: "Team Members",
    count: 328,
    icon: <FaUsers />,
    gradient: "from-green-400 to-teal-600",
  },
  {
    label: "Active Clients",
    count: 782,
    icon: <FaBriefcase />,
    gradient: "from-purple-400 to-pink-600",
  },
  {
    label: "sales Done",
    count: 1045,
    icon: <FaCheckCircle />,
    gradient: "from-yellow-400 to-orange-500",
  },
];

export default function CardsGrid() {
  return (
    <div className="p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {stats.map((s) => (
          <StatCard
            key={s.label}
            label={s.label}
            count={s.count}
            icon={s.icon}
            bgGradient={s.gradient}
          />
        ))}
      </div>
    </div>
  );
}
