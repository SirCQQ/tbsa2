import React from "react";

export function BottomCta() {
  return (
    <div className="text-center mt-16">
      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-white">
        <h3 className="text-2xl font-bold mb-4">
          Gata să modernizezi administrarea?
        </h3>
        <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
          Alătură-te celor peste 500 de asociații care au ales AquaSync pentru o
          gestiune eficientă și transparentă.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* TODO: Convert these to <Button> components and Link if needed */}
          <button className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
            Demo Gratuit
          </button>
          <button className="px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
            Contactează-ne
          </button>
        </div>
      </div>
    </div>
  );
}
