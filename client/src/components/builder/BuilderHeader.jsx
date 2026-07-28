import { motion } from "framer-motion";

function BuilderHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl shadow p-5 mb-6 flex justify-between items-center"
    >
      <div>
        <h1 className="text-3xl font-bold">
          Resume Builder
        </h1>

        <p className="text-gray-500">
          Create an ATS-friendly professional resume.
        </p>
      </div>

      <div className="text-right">
        <p className="text-green-600 font-semibold">
          ✓ Auto Saved
        </p>

        <p className="text-sm text-gray-500">
          Last updated just now
        </p>
      </div>
    </motion.div>
  );
}

export default BuilderHeader;