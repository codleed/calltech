import { useSelector } from 'react-redux'
import { BulbOutlined, AimOutlined, ThunderboltOutlined } from '@ant-design/icons'
import { motion } from 'framer-motion'

const About = () => {
  const { businessInfo } = useSelector((state) => state.business)

  const valueCards = [
    {
      title: 'Our Vision',
      content: businessInfo.about?.vision || 'To be the leading HVAC service provider in Tennessee, known for exceptional quality, reliability, and customer satisfaction in every project we undertake.',
      icon: <BulbOutlined />,
      iconColor: 'text-blue-400'
    },
    {
      title: 'Our Mission',
      content: businessInfo.about?.mission || 'Providing comprehensive HVAC solutions with integrity, professionalism, and cutting-edge technology to ensure optimal comfort for our clients.',
      icon: <AimOutlined />,
      iconColor: 'text-orange-400'
    },
    {
      title: 'Our Motto',
      content: businessInfo.about?.motto || 'Excellence in service, reliability in performance, and dedication to customer satisfaction - that\'s the CallTech promise to every client.',
      icon: <ThunderboltOutlined />,
      iconColor: 'text-blue-400'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { x: 30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white via-gray-200 to-blue-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* WHO WE ARE Label */}
            <div className="text-orange-500 font-semibold text-sm tracking-wider uppercase">
              WHO WE ARE
            </div>

            {/* Main Heading */}
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Local HVAC experts with huge experience and old-fashioned customer service.
            </h2>

            {/* Description */}
            <p className="text-lg text-hvac-gray leading-relaxed">
              CallTech Company LLC is a mechanical, electrical, HVAC/R, and restaurant equipment service company located in Murfreesboro, Tennessee. We pride ourselves on being local home service experts with huge experience as well as providing care and expertise that will leave our customers satisfied.
            </p>
          </motion.div>

          {/* Right Column - Value Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {valueCards.map((card, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 0 30px rgba(59, 130, 246, 0.4)"
                }}
                className="w-full"
              >
                <div className="relative group">
                  {/* Glow effect background */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>

                  {/* Main card */}
                  <div className="relative bg-gradient-to-br from-blue-700 via-blue-600 to-blue-700 rounded-2xl border border-blue-500/20 p-6 backdrop-blur-sm">
                    <div className="flex items-start space-x-4">
                      {/* Icon with background circle */}
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center border border-blue-500/20">
                          <div className={`text-2xl ${card.iconColor}`}>
                            {card.icon}
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-3 text-white">
                          {card.title}
                        </h3>
                        <p className="text-sm leading-relaxed text-gray-300">
                          {card.content}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  )
}

export default About
