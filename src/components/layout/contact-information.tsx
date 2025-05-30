import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock, type LucideIcon } from "lucide-react";

interface ContactMethod {
  icon: LucideIcon;
  title: string;
  description: string;
  value: string;
  action?: string;
  actionLink?: string;
  available: string;
}

interface SupportOption {
  icon: LucideIcon;
  title: string;
  description: string;
  link: string;
}

interface Office {
  city: string;
  address: string;
  phone: string;
  hours: string;
}

interface ContactInformationProps {
  contactMethods: ContactMethod[];
  supportOptions: SupportOption[];
  offices: Office[];
}

export function ContactInformation({
  contactMethods,
  supportOptions,
  offices,
}: ContactInformationProps) {
  return (
    <div className="space-y-10">
      {" "}
      {/* Increased spacing between sections */}
      {/* Contact methods */}
      {contactMethods && contactMethods.length > 0 && (
        <div>
          <h3 className="text-xl font-semibold text-foreground mb-6">
            Alte modalități de contact
          </h3>
          <div className="space-y-4">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <Card
                  key={index}
                  className="bg-card text-card-foreground p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center flex-shrink-0">
                      <Icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium">{method.title}</h4>
                      <p className="text-sm opacity-80 mb-1">
                        {method.description}
                      </p>
                      <p className="text-sm font-medium text-primary">
                        {method.value}
                      </p>
                      <div className="flex items-center text-xs opacity-60 mt-1">
                        <Clock className="h-3 w-3 mr-1" />
                        {method.available}
                      </div>
                      {method.action && (
                        <Button
                          variant="link"
                          size="sm"
                          className="p-0 h-auto mt-2 text-primary hover:text-primary/80"
                          asChild={!!method.actionLink}
                        >
                          {method.actionLink ? (
                            <a
                              href={method.actionLink}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {method.action}
                            </a>
                          ) : (
                            <span>{method.action}</span>
                          )}
                        </Button>
                      )}
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      )}
      {/* Support options */}
      {supportOptions && supportOptions.length > 0 && (
        <div>
          <h3 className="text-xl font-semibold text-foreground mb-6">
            Resurse utile
          </h3>
          <div className="space-y-3">
            {supportOptions.map((option, index) => {
              const Icon = option.icon;
              return (
                <a
                  key={index}
                  href={option.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center flex-shrink-0 group-hover:bg-accent transition-colors">
                    <Icon className="h-5 w-5 text-muted-foreground group-hover:text-accent-foreground" />
                  </div>
                  <div>
                    <div className="font-medium">{option.title}</div>
                    <div className="text-sm opacity-80">
                      {option.description}
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      )}
      {/* Office locations */}
      {offices && offices.length > 0 && (
        <div>
          <h3 className="text-xl font-semibold text-foreground mb-6">
            Birourile noastre
          </h3>
          <div className="space-y-4">
            {offices.map((office, index) => (
              <Card key={index} className="bg-card text-card-foreground p-4">
                <h4 className="font-medium mb-1">{office.city}</h4>
                <div className="text-sm opacity-80">
                  <div className="flex items-start">
                    <MapPin className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0 opacity-60" />
                    <span>{office.address}</span>
                  </div>
                  <div className="flex items-center mt-1">
                    <Phone className="h-4 w-4 mr-2 opacity-60" />
                    <span>{office.phone}</span>
                  </div>
                  <div className="flex items-center mt-1">
                    <Clock className="h-4 w-4 mr-2 opacity-60" />
                    <span>{office.hours}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
