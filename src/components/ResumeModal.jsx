{resumeOpen && (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-4xl h-[80vh] relative">
        <button
          onClick={() => setResumeOpen(false)}
          className="absolute top-4 right-4 text-black hover:text-gray-600"
        >
          <X size={28} />
        </button>
        <iframe
          src="/resume/Satellite_Resume.pdf"
          title="Resume"
          className="w-full h-full rounded-xl"
        ></iframe>
      </div>
    </div>
  )}