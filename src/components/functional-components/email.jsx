<Card className="card1 shadow-md rounded-lg">
                <Row
                  className="flex-wrap lg:flex-nowrap"
                  justify="space-between"
                >
                  <Col className="mb-4 lg:mb-0">
                    <Title
                      level={4}
                      className="mb-1"
                      style={{ color: "#000000", fontSize: "18px" }}
                    >
                      Elizabeth Turner Smith
                    </Title>
                    <Text
                      className="text-gray-500 block"
                      style={{ color: "#8D8D8D", fontSize: "12px" }}
                    >
                      Street 17, D-block, Citi Housing Society, Jhelum, PK
                    </Text>
                    <button
                      className="bg-[#1565C0] text-white py-1 px-4 rounded-full mt-3"
                      onClick={handleOpenModal}
                    >
                      Write an out-reach email
                    </button>
                  </Col>
                  <Modal
                    title="New Email"
                    visible={isModalVisible}
                    onCancel={handleCloseModal}
                    footer={[
                      <Button
                        key="send"
                        type="primary"
                        onClick={handleSendEmail}
                >                      
                          Send Email
                      </Button>
                    ]}
                    width={800}
                  >
                    <Space direction="vertical" style={{ width: "100%" }}>
                      <Input
                        placeholder="To: henry33@diyod.info "
                        value={to}
                        onChange={(e) => setTo(e.target.value)}
                        style={{ marginBottom: 10,color:'#7D8FB3' }}
                      />
                      <Input
                        placeholder="From"
                        value={from}
                        onChange={(e) => setFrom(e.target.value)}
                        style={{ marginBottom: 10 }}
                      />
                      <Input
                        placeholder="Subject"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        style={{ marginBottom: 10 }}
                      />
                    </Space>

                     <ReactQuill
                      value={emailContent}
                      onChange={setEmailContent}
                      modules={{ toolbar: toolbarOptions }}
                      placeholder="Dear [Gorge],

I hope this email finds you well. We wanted to express our sincere gratitude for choosing to visit our property recently. We value your patronage and trust that your experience was enjoyable.

We would love to hear more about your visit and any feedback you might have. Your insights are essential to us in enhancing our services and ensuring that every guest has a memorable experience.

Thank you once again for choosing us, and we look forward to welcoming you back soon"
                      style={{ marginTop: 20, minHeight: 200,background:'#F8F8F8',height:"233px" }}
                    /> 


                  </Modal>
                  <Col className="flex items-center justify-center">
                    <div
                      className="borderLine absolute border-l border-gray-300"
                      style={{
                        height: "304px",
                        left: "47px",
                        top: "-5px",
                        transform: "translateX(-50%)",
                      }}
                    ></div>
                  </Col>
                  <Col className="flex flex-col space-y-1">
                    <Text
                      className="flex items-center text-gray-600"
                      style={{ color: "#1565C0" }}
                    >
                      <MailOutlined
                        className="mr-2 text-red-500"
                        style={{ color: "#E62E2E" }}
                      />
                      Henry33@glyad.info
                    </Text>
                    <Text
                      className="flex items-center text-gray-600"
                      style={{ color: "#1565C0" }}
                    >
                      <PhoneOutlined
                        className="mr-2 text-blue-600"
                        style={{ color: "#555ACC" }}
                      />
                      +1 7654348954
                    </Text>
                  </Col>
                </Row>

                <Row
                  gutter={16}
                  className="text-gray-600 mt-4 text-xs flex-wrap"
                >
                  <Col xs={12} lg={6} className="mb-2">
                    <Text style={{ color: "#65728C" }} strong>
                      Assigned to
                    </Text>
                    <br />
                    <Text style={{ color: "#7D8FB3" }}>Pete Carigia</Text>
                  </Col>
                  <Col xs={12} lg={6} className="mb-2">
                    <Text style={{ color: "#65728C" }} strong>
                      Source
                    </Text>
                    <br />
                    <Text style={{ color: "#7D8FB3" }}>Ylopo</Text>
                  </Col>
                </Row>
                <Row
                  gutter={16}
                  className="text-gray-600 mt-4 text-xs flex-wrap"
                >
                  <Col xs={12} lg={6} className="mb-2">
                    <Text style={{ color: "#65728C" }} strong>
                      Collaborator’s name
                    </Text>
                    <br />
                    <Text style={{ color: "#7D8FB3" }}>Pete Carigia</Text>
                  </Col>
                  <Col xs={12} lg={6} className="mb-2">
                    <Text style={{ color: "#65728C" }} strong>
                      Collaborator’s role
                    </Text>
                    <br />
                    <Text style={{ color: "#7D8FB3" }}>Broker</Text>
                  </Col>
                </Row>
                <Row
                  gutter={16}
                  className="text-gray-600 mt-4 text-xs flex-wrap"
                >
                  <Col xs={12} lg={6} className="mb-2">
                    <Text style={{ color: "#65728C" }} strong>
                      Created at
                    </Text>
                    <br />
                    <Text style={{ color: "#7D8FB3" }}>1 Nov, 2023</Text>
                    <br />
                    <Text style={{ color: "#7D8FB3" }} italic>
                      6:16 pm
                    </Text>
                  </Col>
                  <Col xs={12} lg={6} className="mb-2">
                    <Text style={{ color: "#65728C" }} strong>
                      Last Update
                    </Text>
                    <br />
                    <Text style={{ color: "#7D8FB3" }}>4 Dec, 2023</Text>
                    <br />
                    <Text style={{ color: "#7D8FB3" }} italic>
                      6:20 pm
                    </Text>
                  </Col>
                  <Col xs={12} lg={6} className="mb-2">
                    <Text style={{ color: "#65728C" }} strong>
                      Last Activity
                    </Text>
                    <br />
                    <Text style={{ color: "#7D8FB3" }}>1 Nov, 2023</Text>
                    <br />
                    <Text style={{ color: "#7D8FB3" }} italic>
                      6:20 pm
                    </Text>
                  </Col>
                </Row>

                <h3 className="mt-4 font-bold text-black">Tags</h3>

                <div
                  className="flex flex-wrap mt-4 lg-w-[465px]"
                  style={{ gap: "27px" }}
                >
                  {tags.map((tag, index) => (
                    <Tag
                      key={index}
                      className="bg-gray-200 text-gray-700 rounded-lg px-3 py-1 text-sm"
                      style={{
                        color: "#7D8FB3",
                        fontSize: "12px",
                        fontWeight: 700,
                        background: "#ECF0F1",
                        border: "2px solid #ECF0F1",
                        borderRadius: "15px",
                      }}
                    >
                      {tag}
                    </Tag>
                  ))}
                </div>
              </Card>