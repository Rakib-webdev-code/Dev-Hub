import type PageProps from "../types/user";

interface UserInfoProps {
  user: PageProps;
}

const UserInfoPage = ({ user }: UserInfoProps) => {
  return (
    <div className="mt-10 w-full max-w-md rounded-2xl border border-gray-200 bg-white p-6 text-left shadow-md transition hover:-translate-y-1 hover:shadow-lg">
      {/* Profile Header */}
      <div className="border-b border-gray-100 pb-5">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900">
          {user.name}
        </h2>

        <p className="mt-1 text-sm font-semibold text-orange-500">
          {user.role}
        </p>

        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-500">
          <span>{user.age} years old</span>
          <span>{user.location}</span>
        </div>
      </div>

      {/* About */}
      <div className="mt-5">
        <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-900">
          About
        </h3>

        <p className="mt-2 text-sm leading-6 text-gray-600">
          {user.about}
        </p>
      </div>

      {/* Experience */}
      <div className="mt-5">
        <p className="text-sm font-medium text-gray-700">
          {user.experience} year experience
        </p>
      </div>

      {/* Skills */}
      <div className="mt-5">
        <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-900">
          Skills
        </h3>

        <div className="mt-3 flex flex-wrap gap-2">
          {user.skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full bg-orange-50 px-3 py-1 text-xs font-medium text-orange-600"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Availability */}
      <div className="mt-6">
        <span className="inline-block rounded-full bg-green-50 px-3 py-1 text-sm font-medium text-green-600">
          {user.isAvailable ? "Available for work" : "Not available"}
        </span>
      </div>
    </div>
  );
};

export default UserInfoPage;